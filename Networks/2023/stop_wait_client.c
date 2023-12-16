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

#include <time.h>
#include <sys/select.h>

#define IP "127.0.0.1" // change as required
#define PORTNO 54321 // change as required
#define SIZE 256 // change as required

int connect_to_server() {
    // create a socket and get file descriptor
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);

    // Initialize socket structure
    struct sockaddr_in serv_addr;
    bzero((char *) &serv_addr, sizeof(serv_addr));

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = inet_addr(IP);
    serv_addr.sin_port = htons(PORTNO);

    // connect to server

    if (connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
        perror("ERROR while connecting");
        exit(1);
    }

    return sockfd;
}



/**
 * a simple wrapper for read with a timeout
*/
ssize_t my_read(int fd, void *buf, size_t n, time_t timeout) {
    fd_set read_fds; // create a set of fds to observe
    FD_ZERO(&read_fds); // clear the fd set
    FD_SET(fd, &read_fds); // add stdin to the set

    struct timeval timer; // create a timer
    timer.tv_sec = timeout; // initialize
    timer.tv_usec = 0;

    int retval = select(fd+1, &read_fds, NULL, NULL, &timer);
    if (retval < 1) { // error or timeout
        return retval;
    } else { // data available, read it
        /* FD_ISSET(fd, &read_fds) will be true */
        return read(fd, buf, n);
    }
}

int main(int argc, char *argv[]) {
    srand( time(NULL) );
    int timeout = 10; // seconds, try smaller value, say 2

    int connected_socket_fd = connect_to_server();

    uint32_t num;
    int i = 1;
    while (i <= 10) { // send 10 frames
        printf("sending packet %u\n", i);
        num = htonl(i);
        int n = write(connected_socket_fd, &num, sizeof(uint32_t));
        if (n < 0){
            perror("ERROR while writing to socket");
            exit(1);
        }

        // reply from server
        n = my_read(connected_socket_fd, &num, sizeof(uint32_t), timeout);
        if (n == 0) { // timeout on ACK, frame lost or delayed
            printf("timeout occurred, resending\n");
            continue;
        }
        if (n < 0){
            perror("ERROR while reading from socket");
            exit(1);
        }
        printf("ACK received for packet %u \n", ntohl(num));
        i++; // increment the sequence counter
    }

    close(connected_socket_fd);
    return 0;
}
