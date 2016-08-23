package placer;

import org.apache.commons.math3.linear.ArrayRealVector;
import org.apache.commons.math3.linear.BlockRealMatrix;
import org.apache.commons.math3.linear.DecompositionSolver;
import org.apache.commons.math3.linear.LUDecomposition;
import org.apache.commons.math3.linear.RealMatrix;
import org.apache.commons.math3.linear.RealVector;

import parser.Hyperedge;
import parser.NetNode;
import parser.Parser;

/**
 * This class implements Quadratic placement technique.
 * <P>
 * LU decomposition is used to solve the linear equations.
 * <P> 
 * <a href="http://commons.apache.org/math/">Apache Commons Math</a> package has been used.
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 * 
 */
public class QP {

	private static RealMatrix connectivity, C, D, Q;
	private static RealVector X, Y, dx, dy;
	
	private static int r, n;
	
	/**
	 * This prevents creation of any instance of this class
	 */
	private QP() {
		//nothing here!
	}
	
	public static void solve(){
		n = Parser.NumNodes;
		r = Parser.r;
		
		/** fill the <code>connectivity</code> matrix */
		connectivity = new BlockRealMatrix(n, n);
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				connectivity.setEntry(i, j, 0);
			}
		}
		for (Hyperedge edge : Parser.hypergraph) {
			for (NetNode node_i : edge.netnodes) {
				int index_i = Parser.nodes.indexOf(node_i.n);
				for (NetNode node_j : edge.netnodes) {
					if(node_i == node_j)
						continue;
					int index_j = Parser.nodes.indexOf(node_j.n);
					connectivity.setEntry(index_i, index_j, 1);
				}
			}
		}

		/** create the <code>C</code> matrix */
		C = new BlockRealMatrix(r,r);
		for (int i = 0; i < r; i++) {
			for (int j = 0; j < r; j++) {
				C.setEntry(i, j, connectivity.getEntry(i, j));
			}
		}
		
		/** create the <code>D</code> matrix */
		D = new BlockRealMatrix(r, r);
		for (int i = 0; i < r; i++) {
			double val = 0;
			for (int j = 0; j < n; j++) {
				val += connectivity.getEntry(i, j); 
				
				if (i != j & j < r)
					D.setEntry(i, j, 0);
			}
			D.setEntry(i,i, val);
		}
		
		/** obtain the <code>Q</code> matrix */
		Q = D.subtract(C);
//		showMatrix(Q);
		
		/** create the <code>dx</code> and <code>dy</code> vectors */
		dx = new  ArrayRealVector(r);
		dy = new  ArrayRealVector(r);
		for (int i = 0; i < r; i++) {
			int val_x=0, val_y=0;
			for (int j = r; j < n; j++) {
				double x = Parser.nodes.get(j).ll_xcoord;
				val_x += connectivity.getEntry(i, j) * x;
				double y = Parser.nodes.get(j).ll_ycoord;
				val_y += connectivity.getEntry(i, j) * y;
			}
			dx.setEntry(i, -val_x); //here - was missing
			dy.setEntry(i, -val_y); //and here also!
		}
		
		/**
		 * now solve QX + dx = 0 and QY + dy = 0
		 */
		DecompositionSolver solver = new LUDecomposition(Q).getSolver();
		X = solver.solve(dx.mapMultiply(-1));
		Y = solver.solve(dy.mapMultiply(-1));
		
		/** Copy the result back to the corresponding nodes */
		for (int i = 0; i < r; i++) {
			Parser.nodes.get(i).ll_xcoord = X.getEntry(i);
			Parser.nodes.get(i).ll_ycoord = Y.getEntry(i);
//			System.out.println(X.getEntry(i)+" "+Y.getEntry(i));
		}
	}
}
