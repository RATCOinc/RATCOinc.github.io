/*
 * This is sample code generated by rpcgen.
 * These are only templates and you can use them
 * as a guideline for developing your own functions.
 */

#include "calc.h"

int *
add_1_svc(intpair *argp, struct svc_req *rqstp)
{
	static int  result;

	/*
	 * insert server code here
	 */
// 	printf("add function called\n");
	result = argp->a + argp->b;
	printf("returning: %d\n", result);

	return &result;
}

int *
sub_1_svc(intpair *argp, struct svc_req *rqstp)
{
	static int  result;

	/*
	 * insert server code here
	 */
	printf("sub function called\n");

	return &result;
}
