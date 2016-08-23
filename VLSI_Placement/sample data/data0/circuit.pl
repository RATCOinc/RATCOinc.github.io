# UCLA pl 1.0
# File header with version information, etc.,
# Anything following “#” is a comment, and should be ignored

# node_name	  ll_xcoord	 ll_ycoord 	:  orientation   movetype
	o0		   0		   0	:	N
	o1		   0		   0	:	N
	o2		   0		   0	:	N
	o3		   31		  52	:	N		/FIXED
	p0		   15		  47	:	N		/FIXED_NI
# ll xcoord refers to lower left x coordinate and ll ycoord refers to lower left y coordinate
# The coordinates for all moveable nodes in the design will be (0,0) or undefined
# The placer should parse this file to obtain the coordinates for all the terminal or fixed nodes.
# FIXED_NI refers to “Not an Image” which allows overlapping for such blocks
