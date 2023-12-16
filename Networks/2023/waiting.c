/*
    A demonstration of waiting a process
    
    Busy waiting should be avoided
*/

#include <stdio.h>
#include <time.h> // for time()
#include <unistd.h> // for sleep()

#define WAIT 10 // seconds

int main(int argc, char const *argv[]) {
    
/*    // Busy wait long version
    printf("before\n");
    time_t before, now;
    before = time(NULL);
    while (1) {
        now = time(NULL);
        if (now - before >= WAIT) {
            break;
        }
    }
    printf("after %d seconds\n", WAIT);
*/
    // compact version of busy wait
    printf("before\n");
    time_t before = time(NULL);
    while(time(NULL) - before < WAIT);
    printf("after %d seconds\n", WAIT);

    // using sleep
    printf("before\n");
    sleep(WAIT);
    printf("after %d seconds\n", WAIT);

    return 0;
}
