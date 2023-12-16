/*
    A demonstration of timeout
*/

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/select.h>

#define TIMEOUT 10 // in seconds

#define SIZE 128 // change as needed

int main(int argc, char const *argv[]) {

    char buffer[SIZE];

    fd_set read_fds; // create a set of fds to observe
    FD_ZERO(&read_fds); // clear the fd set
    FD_SET(0, &read_fds); // add stdin to the set

    struct timeval timer; // create a timer
    timer.tv_sec = TIMEOUT; // initialize
    timer.tv_usec = 0;

    printf("input something within %d seconds: ", TIMEOUT);
    fflush(stdout); // required

    int retval = select(1, &read_fds, NULL, NULL, &timer);
    if (retval == -1) { // error
        perror("select()");
        exit(1);
    } else if (retval == 0) { // timeout
        printf("\nno data within %d seconds, exiting\n", TIMEOUT);
    } else { // data available, read it
        /* FD_ISSET(0, &read_fds) will be true */
        retval = read(0, buffer, SIZE);
        if(retval > 0) {
            buffer[retval] = '\0'; // ensure null terminated string
            printf("You have entered: %s", buffer);
        }
    }

    return 0;
}
