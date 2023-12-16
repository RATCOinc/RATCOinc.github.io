/*
    A demonstration of on command-line arguments
    compile this code and pass some arguments
    the arguments are seperated by white space
    
    usage: <excutable> <arg1> <arg2> ...
*/

#include <stdio.h>

int main (int argc, char* argv[]) {
    /*
        argc specifies the argument count the
        executable name is treated as the first argument
        
        the arguments (values) are loaded into
        the string array argv
    */

    printf("Number of arguments passed: %d\n", argc-1);

    printf("The executable name is: %s\n", argv[0]);

    printf("Given arguments are: ");
    for(int i=1; i<argc; i++) {
        printf("%s, ", argv[i]);
    }
    printf("\b\b \n"); // the space overwrites the comma

    return 0;
}