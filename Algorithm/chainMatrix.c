/**
 * This code is a C implementation of algorithm 11 & 12
 * The indices are shifted as required
 * 
 * Run this code with argument 1 to print the computation done at each step
*/

#include<stdio.h>
#include<string.h>
#include<malloc.h>
#include<limits.h>

#define INFINITE INT_MAX

int verbose = 0;

int* allocate1D(int length) {
    return (int*)malloc(length*sizeof(int));
}

int** allocate2D(int rows, int cols) {
    int i, **tmp;
    tmp = (int**)malloc(rows*sizeof(int*));
    for(i = 0; i < rows; i++) {
        tmp[i] = allocate1D(cols);
    }
    return tmp;
}

void deallocate2D(int **matrix, int rows) {
    int i;
    for(i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);
}

void computeOptimalOrder(int *d, int **opt, int **sol, int n) {
    int i, j, k, len, tmp;
    //set base values
    for(i = 1; i <= n; i++) {
        opt[i-1][i-1] = 0;
    }

    for(len = 2; len <= n; len++) {
        for(i = 1; i <= (n-len+1); i++) {
            j = i + len - 1;
            opt[i-1][j-1] = INFINITE;
            if(verbose){
                printf("\nsubchain:%d-%d\n",i,j);
            }
            for(k = i; k < j; k++) {
                tmp = opt[i-1][k-1] + opt[k][j-1] + d[i-1]*d[k]*d[j];
                if(verbose){
                    printf("splitIndex:%d prefixChain:%d-%d suffixChain:%d-%d\n",k,i,k,k+1,j);
                    printf("cost is: %d + %d + %d*%d*%d = %d\n",opt[i-1][k-1],opt[k][j-1],d[i-1],d[k],d[j],tmp);
                }
                if(tmp < opt[i-1][j-1]) {
                    opt[i-1][j-1] = tmp;
                    sol[i-1][j-1] = k;
                }
            }
            if(verbose){
                printf("optimal cost: opt[%d][%d]=%d\n",i,j,tmp);
                printf("optimal split index: sol[%d][%d]=%d\n",i,j,k);
            }
        }
    }
}

void printOptimalOrder(int **sol, int i, int j) {
    int k;
    if(i == j) {
        printf("A%d",i);
    } else {
        k = sol[i-1][j-1];
        printf("(");
        printOptimalOrder(sol, i, k);
        printf(" x ");
        printOptimalOrder(sol, k+1, j);
        printf(")");
    }
}


int main(int argc, char *argv[]) {
    int *d, **opt, **sol;
    int n, i;
    
    if(argc>1 && strcmp(argv[1], "1")==0)
        verbose = 1;

    //take user inputs
    printf("Enter chain length:");
    scanf("%d",&n);
    d = allocate1D(n+1);
    printf("Enter %d dimensions:",n+1);
    for(i = 0; i <= n; i++) {
        scanf("%d",&d[i]);
    }
    
    //start solving
    opt = allocate2D(n, n);
    sol = allocate2D(n, n);
    computeOptimalOrder(d, opt, sol, n);

    //final result
    printf("\nThe optimal multiplication order is:\n");
    printOptimalOrder(sol, 1, n);
    putchar('\n');

    free(d);
    deallocate2D(opt, n);
    deallocate2D(sol, n);
    return 0;
}
