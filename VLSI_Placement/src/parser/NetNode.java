package parser;

/**
 * This class keeps the information for a node connected to a hyperedge.
 * 
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class NetNode {

	public Node n;
	public char pin_dir;
	public double pin_xoffset, pin_yoffset;
	
	/**
	 * Constructs a {@code NetNode} type object with some initial values.
	 * @param node_name		the name of the node
	 * @param pin_dir		the direction of the pin, I/O/B
	 * @param pin_xoffset	the x-coordinate from the center of the node
	 * @param pin_yoffset	the y-coordinate from the center of the node
	 */
	public NetNode(String node_name, char pin_dir, Double pin_xoffset, Double pin_yoffset) {
		for (Node node : Parser.nodes) {
			if (node.nodeName.equalsIgnoreCase(node_name)){
				n = node;
				break;
			}
		}
		this.pin_dir = pin_dir;
		this.pin_xoffset = pin_xoffset;
		this.pin_yoffset = pin_yoffset;
	}
	
	/**
	 * This method returns the string equivalent of {@code this} object.
	 */
	@Override
	public String toString() {
		return (n.nodeName+"	"+pin_dir+"	"+pin_xoffset+"	"+pin_yoffset);
	}
	
	
	
}
