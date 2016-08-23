package user_interface;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.Scanner;

import parser.Hyperedge;
import parser.NetNode;
import parser.Node;
import parser.Parser;
import placer.Legalizer;
import placer.QP;
import placer.myNLP;

/**
 * This class is the stating point of our placer program.
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class Driver {

	public static void main(String[] args) {

		if (args.length>0 && args[0].equalsIgnoreCase("-gui")) {
			new myFrame();
		} else {
			Parser.init();
			
			Scanner scr = new Scanner(System.in);
			System.out.print("Enter aux file name: ");
			String file = scr.nextLine();
			
			System.out.println("Starting the parser...");
			Parser.parseData(file);
			System.out.println("Parsing is done.");
			
			System.out.print("Enter output file name: ");
			String file2 = scr.nextLine();
			
			System.out.println("Starting the Quadratic solver...");
			QP.solve();
			System.out.println("Finished.");
			
			System.out.println("Starting the Nonlinear solver...");
			myNLP.solve();
			System.out.println("Finished.");
			
			System.out.println("Leagalizing the solution...");
			Legalizer.Legalize();
			System.out.println("Finished.");


			
			System.out.println("The final HPWL: "+hpwl());
			System.out.println("Total overlap: "+calcOverlap());
			
			
			writeFile(file2);
			System.out.println("Output file wirtten.");
		}
	}
	
	public static double hpwl() {
		
		double hpwl, max_x, min_x, max_y, min_y, x, y;
		
		hpwl = 0;
		for (Hyperedge edge : Parser.hypergraph) {
			min_x = min_y = Double.MAX_VALUE;
			max_x = max_y = Double.MIN_VALUE;
			for (NetNode node : edge.netnodes)  {
				int index = Parser.nodes.indexOf(node.n);
				x = node.n.ll_xcoord;
				y = node.n.ll_ycoord;
				
				if (x < min_x)
					min_x = x;
				if(x > max_x)
					max_x = x;
				if (y < min_y)
					min_y = y;
				if (y > max_y)
					max_y = y;
			}
			hpwl += ((max_x - min_x) + (max_y - min_y));
//			System.out.println("hpwl = "+hpwl);
		}
		return hpwl;
	}

	public static double calcOverlap() {
		int overlap = 0; 
		for (Node n : Parser.nodes) {
			double nx;
			double ny;
			nx = n.ll_xcoord;
			ny = n.ll_ycoord;
			double nw = n.width;
			double nh = n.height;
			for (Node m : Parser.nodes) {
				if (n==m) {
					continue;
				}
				double mx;
				double my;
				mx = m.ll_xcoord;
				my = m.ll_ycoord;
				double mw = m.width;
				double mh = m.height;
				overlap += theta(nx, nx+nw, mx, mx+mw)*
							theta(ny, ny+nh, my, my+mh);
				//System.out.println(n.nodeName+":"+m.nodeName+":"+overlap);
			}
		}
		return overlap/2;
	}

	private static int theta(double L1, double R1, double L2, double R2) {
		int z = ((Math.min((int)R1, (int)R2)) - (Math.max((int)L1, (int)L2)));
		if (z <= 0)
			z=0;
		return z;
	}
	
	public static void writeFile(String fileName){	
		BufferedWriter out = null;
		try {
			out = new BufferedWriter(new FileWriter(fileName));	
			out.write("# UCLA pl 1.0 \n");
			out.write("# node_name \t ll_xcoord \t ll_ycoord \t : \t orientation \t movetype \n");
			
			for (Node n : Parser.nodes) {
				String moveType = null;
				switch (n.moveType) {
				case movable:
					moveType = "";
					break;
				case terminal:
					moveType = "/FIXED";
					break;
				case terminal_NI:
					moveType = "/FIXED_NI";
					break;
				default:
					break;
				}
				String line = "\t"+n.nodeName+"\t\t"+n.ll_xcoord+"\t\t"+n.ll_ycoord+"\t:\t"+n.orientation+"\t\t"+moveType+"\n";
				out.write(line);
			}
		}
		catch(Exception e){
			System.out.println("ERROR");
		} finally {
			if (out != null) {
				try {
					out.close();
				} catch (Exception ignored) {} ;
			}
		}
	}

}
