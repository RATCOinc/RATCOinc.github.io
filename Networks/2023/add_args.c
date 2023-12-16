/*
    recall that all command-line arguments are
    loaded into a string array;
    
    thus to do any numerical computation on the
    arguments, we need to first convert them
    
    use atoi(), atof() and other built-in methods
    
    usage: <excutable> <int1> <int2> ...
*/

#include <stdio.h>
#include <stdlib.h>

int main (int argc, char* argv[]) {

    int sum = 0;

    for(int i=1; i<argc; i++) {
        sum += atoi(argv[i]);
    }

    printf("%d\n", sum);

    return 0;
}