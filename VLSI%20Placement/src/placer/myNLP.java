package placer;
import org.apache.commons.math3.optimization.GoalType;
import org.apache.commons.math3.optimization.PointValuePair;
import org.apache.commons.math3.optimization.SimpleValueChecker;
import org.apache.commons.math3.optimization.general.ConjugateGradientFormula;
import org.apache.commons.math3.optimization.general.NonLinearConjugateGradientOptimizer;

import parser.Parser;


public class myNLP {

	static LSE fn;
	
	/**
	 * This prevents creation of any instance of this class
	 */
	private myNLP() {
		
	}
	
	/**
     * Optimize our objective function by using {@code NonLinearConjugateGradientOptimizer}.
     * 
     * @see NonLinearConjugateGradientOptimizer
     */
	public static void solve() {
		fn = new LSE();
		
		int r = Parser.r;
		
		double[] initialguess = new double[r*2];
		for (int i = 0; i < initialguess.length/2; i++) {
			initialguess[i] = Parser.nodes.get(i).ll_xcoord;
			initialguess[i+r] = Parser.nodes.get(i).ll_ycoord;
		}
		
		NonLinearConjugateGradientOptimizer optimizer = 
				new NonLinearConjugateGradientOptimizer(ConjugateGradientFormula.POLAK_RIBIERE, new SimpleValueChecker(1e-6, 1e-6));
		
		try {
			PointValuePair val = optimizer.optimize(100, fn, GoalType.MINIMIZE, initialguess);
			double[] d = val.getPoint();
//			for (double a : d) {
//				System.out.println(a);
//			}
			for (int i = 0; i < r; i++) {
				Parser.nodes.get(i).ll_xcoord = d[i];
				Parser.nodes.get(i).ll_ycoord = d[i+r];
			}
		} catch (Exception e) {
			//no change
		}
	}
		

}
