package placer;

import java.util.ArrayList;
import java.util.Comparator;

import parser.Hyperedge;
import parser.NetNode;
import parser.Node;
import parser.Parser;

public class Legalizer {
	
	static int n,r;
	private static ArrayList<Node> nodes = new ArrayList<>();
	
	
	/**
	 * This prevents creation of any instance of this class
	 */
	private Legalizer() {
		//nothing here!
	}
	
	public static void Legalize() {
		n = Parser.NumNodes;
		r = Parser.r;
		
		nodes.addAll(Parser.movable);
		
		//Tetris Algorithm, by HILL(2002)
		//places the block like tetris game
		
		//sort by x coordinate
		nodes.sort(new Comparator<Node>() {

			@Override
			public int compare(Node o1, Node o2) {
				return Double.compare(o1.ll_xcoord, o2.ll_ycoord);
			}
		});
		
		int[] fill = new int[Parser.NumRows];
		for (int i = 0; i < fill.length; i++) {
			fill[i] = Parser.scl.get(i).SubrowOrigin;
		}
		for (int i = 0; i < r; i++) {
			int best = Integer.MAX_VALUE;
			int best_row = -1;
			for (int j = 0; j < Parser.NumRows; j++) {
				int cost = calcCost(i,j,fill);
				if (cost < best) {
					best = cost;
					best_row = j;
				}
			}
			//move cell						//assuming that in each row, there is enough space available!!!
			int x = fill[best_row];
			int y = Parser.scl.get(best_row).Coordinate;
			nodes.get(i).ll_xcoord = x;
			nodes.get(i).ll_ycoord = y;
			
			fill[best_row] += nodes.get(i).width + Parser.scl.get(best_row).Sitespacing;
		}
	}

	private static int calcCost(int i, int j, int[] fill) {
		//ignoring pin offset
		//evaluating lse!
		int x = fill[j];
		int y = Parser.scl.get(j).Coordinate;
		
		double[] d = new double[r*2];
		
		for (int k = 0; k < r; k++) {
			d[k] = nodes.get(i).ll_xcoord;
			d[r+k] = nodes.get(i).ll_ycoord;
		}
		
		double val = calcHpwl(d);
		
		return (int) val;
	}

	
	private static double calcHpwl(double[] point) {
		
		double hpwl, max_x, min_x, max_y, min_y, x, y;
		
		hpwl = 0;
		for (Hyperedge edge : Parser.hypergraph) {
			min_x = min_y = Double.MAX_VALUE;
			max_x = max_y = Double.MIN_VALUE;
			for (NetNode node : edge.netnodes)  {
				int index = Parser.nodes.indexOf(node.n);
				if (index < r) {
					x = point[index];
					y = point[r + index];
				} else {
					x = node.n.ll_xcoord;
					y = node.n.ll_ycoord;
				}
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
}
