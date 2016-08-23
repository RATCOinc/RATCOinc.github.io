package parser;

import java.util.ArrayList;

/**
 * This class denotes a net by the hyperedge representation.
 * A hyperedge is an edge in the hypergraph that connects a set of vertices (possibly more tha two).
 * Thus an hyperedge essentially a list of those vertices that it connects.
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class Hyperedge {
	
	public String net_name;
	public int degree_of_this_net;
	public ArrayList<NetNode> netnodes;

	/**
	 * Constructs a {@code Hyperedge} type object with some initial values.
	 * @param degree_of_this_net the number of nodes connected to this net
	 * @param net_name the name of this net
	 * @param netdata the raw data about the nodes and pins
	 */
	public Hyperedge(int degree_of_this_net, String net_name, String[] netdata) {
		this.degree_of_this_net = degree_of_this_net;
		this.net_name = net_name;
		
		netnodes = new ArrayList<>();
		int i = 0;
		for (String data : netdata) {
			String[] token = data.split("(\\s+:\\s+)|(\\s+)");
			String node_name = token[0];
			char pin_dir = token[1].charAt(0);
			Double pin_xoffset = Double.parseDouble(token[2]);
			Double pin_yoffset = Double.parseDouble(token[3]);
			
			netnodes.add(new NetNode(node_name,pin_dir,pin_xoffset,pin_yoffset));
		}
	}

}
