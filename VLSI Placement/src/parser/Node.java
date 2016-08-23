package parser;
/**
 * This class represents a node or a module.
 * A node have certain attributes associated with it which are listed as members. 
 * The coordinates of the moveable nodes are to determined by the placer, while for a fixed node its coordinates are constants
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class Node {

	public String nodeName;
	public int width;
	public int height;
	public Move moveType;
	
	public double ll_xcoord, ll_ycoord ;
	public String orientation;
	

	/**
	 * Constructs a {@code Node} type object with some initial values.
	 * @param nodeName	the name of the node
	 * @param width		the width of the node
	 * @param height	the height of the node
	 * @param moveType	the type of the node moveable/fixed/fixed_NI 
	 */
	public Node(String nodeName, int width, int height, Move moveType) {
		this.nodeName = nodeName;
		this.width = width;
		this.height = height;
		this.moveType = moveType;
	}

	/**
	 * This method returns the string equivalent of {@code this} object.
	 */
	@Override
	public String toString() {
		return (nodeName+"	"+width+"	"+height+"	"+moveType+"	"+ll_xcoord+"	"+ll_ycoord);
	}
}
