/*
    this is a demonstration on console I/O
    using the read() and write() system calls
    
    note that fd 0 refers to stdin while fd 1
    points to stdout
    
    recommended usage: <executable> < some_exsisting_file
*/

#include <stdio.h>
#include <unistd.h>

#define SIZE 10 // change if needed

int main (int argc, char* argv[]) {

    char str[SIZE];
    int len;

    while(1) {
        len = read(0, str, SIZE); // read from stdin
        if (len <= 0) { // EOF or error
            break;
        }
        
        write(1, str, len); // write onto stdout
    }

    return 0;
}