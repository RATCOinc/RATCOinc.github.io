/**
 * A simple simulation of stop-and-wait protocol
*/

#include <stdio.h>
#include <stdlib.h>

#include <netinet/in.h>

#include <sys/types.h>
#include <sys/socket.h>
#include <arpa/inet.h>

#include <strings.h>
#include <unistd.h>

#define PORTNO 54321 // change as required
#define SIZE 256 // change as required

int create_TCP_listener_socket() {
    // create a socket and get file descriptor
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);

    // Initialize socket structure
    struct sockaddr_in serv_addr;
    bzero((char *) &serv_addr, sizeof(serv_addr));

    serv_addr.sin_family = AF_INET;
    //serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    serv_addr.sin_addr.s_addr = INADDR_ANY;
    serv_addr.sin_port = htons(PORTNO);

    // bind the host address using bind() call
    if (bind(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0){
        perror("ERROR on binding\n");
        exit(1);
    }

    // start listening for the clients,
    // here process will go in sleep mode and will wait for the incoming connection
    if (listen(sockfd, 5) < 0) {
        perror("Listen error");
        exit(1);
    }
    printf("server started listening in port %d\n", PORTNO);

    return sockfd;
}

int accept_client(int sockfd) {
    // accept actual connection from the client
    struct sockaddr_in cli_addr;
    socklen_t cli_addr_len = sizeof(cli_addr);
    int accepted_sockfd = accept(sockfd, (struct sockaddr *)&cli_addr, &cli_addr_len);
    printf("connection established to a client\n");

    return accepted_sockfd;
}

/**
 * a simple wrapper for write with random delay
*/
ssize_t my_write(int fd, void *buf, size_t n, unsigned int max_delay) {
    unsigned int delay = rand() % max_delay;

    printf("waiting for %u seconds\n", delay);
    // fflush(stdout); // not required

    sleep(delay); // wait for some time
    printf("now sending\n");

    return write(fd, buf, n); // go ahead and write
}

int main(int argc, char *argv[]) {
    int max_delay = 5; // seconds

    int socket_fd = create_TCP_listener_socket();

    int accepted_socket_fd = accept_client(socket_fd);
    
    uint32_t num, converted_num, last_num = 0;
    while (1) {
        int n = read(accepted_socket_fd, &num, sizeof(uint32_t));
        if (n < 0){
            perror("ERROR in reading from socket");
            exit(1);
        }
        if (n == 0) { // end of stream
            printf("client closed\n");
            break;
        }
        converted_num = ntohl(num);
        if(last_num + 1 != converted_num) { // incorrect sequence number
            // frame lost, ignore and don't send ACK
            continue; // not useful in simple stop-and-wait
        }
        printf("received packet %u\n", converted_num);
        last_num = converted_num;

        sleep(1); // wait 1 sec

        // sending ACK back
        n = my_write(accepted_socket_fd, &num, sizeof(uint32_t), max_delay);
        printf("ACK sent\n");
        if (n < 0){
            perror("ERROR in writing to socket");
            exit(1);
        }
    }

    close(accepted_socket_fd);
    close(socket_fd);
    return 0;
}
