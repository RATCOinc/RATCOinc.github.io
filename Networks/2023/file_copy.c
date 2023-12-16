/*
    this demonstration is a file copy program
    using the read() and write() system calls
    
    use open() and close() system call to create
    and release file descriptors
    
    usage: <executable> <source file> <destination file>
*/

#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main (int argc, char* argv[]) {

    char ch;
    int len;
    int fd_read, fd_write;

    if (argc < 2) {
        printf("Usage: %s <source file> <destination file>", argv[0]);
    }

    fd_read = open(argv[1], O_RDONLY);
    fd_write = open(argv[2], O_CREAT | O_TRUNC | O_WRONLY, 0644);
    
    if(fd_read < 0) {
        printf("can not open file: %s\n", argv[1]);
        exit(1);
    }
    if(fd_write < 0) {
        printf("can not open file: %s\n", argv[2]);
        exit(1);
    }

    while(1) {
        len = read(fd_read, &ch, sizeof(char));
        if (len <= 0) { // EOF or error
            break;
        }

        write(fd_write, &ch, sizeof(char));
    }


    close(fd_read);
    close(fd_write); // must be closed

    return 0;
}
