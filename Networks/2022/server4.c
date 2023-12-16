#include <stdio.h>
#include <stdlib.h>

#include <netinet/in.h>

#include <sys/types.h>
#include <sys/socket.h>
#include <arpa/inet.h>

#include <string.h>
#include <unistd.h>

#include <poll.h>

#define MAX_CLIENTS 31 // change as required
#define PORTNO 54321 // change as required
#define SIZE 256 // change as required

int get_listener_socket() {
    // create a socket and get file descriptor
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);

    // Initialize socket structure
    struct sockaddr_in serv_addr;
    bzero((char *) &serv_addr, sizeof(serv_addr));

    serv_addr.sin_family = AF_INET;
    //serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    serv_addr.sin_addr.s_addr = INADDR_ANY;
    serv_addr.sin_port = htons(PORTNO);

    // // Lose the pesky "address already in use" error message
    // setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(int));

    // bind the host address using bind() call
    if (bind(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0){
        perror("ERROR on binding\n");
        exit(1);
    }

    // start listening for the clients,
    // here process will go in sleep mode and will wait for the incoming connection
    if (listen(sockfd, 5) < 0) {
        perror("Listen ERROR");
        exit(3);
    }
    printf("server started listening in port %d\n", PORTNO);

    return sockfd;
}

int main(int argc, char const *argv[]) {
    int server_sockfd = get_listener_socket();

    // create polling list
    struct pollfd poll_fds[MAX_CLIENTS+1];

    // add the server socket into the polling list 
    poll_fds[0].fd = server_sockfd;
    poll_fds[0].events = POLLIN; // Report ready to read on incoming connection

    int num_clients = 0;
    char buffer[SIZE];

    while(1) {
        int poll_count = poll(poll_fds, MAX_CLIENTS+1, -1); // indefinite wait

        if (poll_count <= 0) {
            perror("ERROR poll failed");
            exit(1);
        }

        // check server status after poll
        // if it is ready to read, handle new connection
        if (poll_fds[0].revents & POLLIN) {
            struct sockaddr_in cli_addr;
            int cli_addr_len = sizeof(cli_addr);
            int accepted_sockfd = accept(server_sockfd, (struct sockaddr *)&cli_addr, &cli_addr_len);
            if(accepted_sockfd < 0) {
                perror("ERROR on accept");
            }
            printf("connected to %s:%d\n", inet_ntoa(cli_addr.sin_addr), (int) ntohs(cli_addr.sin_port));

            // add client to polling list
            num_clients++;
            poll_fds[num_clients].fd = accepted_sockfd;
            poll_fds[num_clients].events = POLLIN; 
        }
        
        // poll through all clients looking for data to read
        for(int i = 1; i <= num_clients; i++) {
            // if not ready to read, poll next one
            if (! poll_fds[i].revents & POLLIN) {
                continue;
            }
            int n = read(poll_fds[i].fd, buffer, SIZE-1);
            if (n < 0){
                perror("ERROR in reading from socket");
            }
            if (n == 0) { // end of stream
                printf("client closed\n");

                // close and remove client from polling list
                close(poll_fds[i].fd);
                poll_fds[i] = poll_fds[num_clients]; // overwrite
                num_clients--;
                
                break;
            }

            // Send to everyone, except ourself!
            for(int j = 1; j <= num_clients; j++) {
                int dest_fd = poll_fds[j].fd;
                if (i != j) {
                    if (write(poll_fds[j].fd, buffer, n) < 0) {
                        perror("ERROR in writing to socket");
                    }
                }
            } // END sending all
        } // END polling all
    } // END infinite loop 

    
    close(server_sockfd); // poll_fds[0].fd
    return 0;
}
