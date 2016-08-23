package placer;
import org.apache.commons.math3.analysis.differentiation.DerivativeStructure;
import org.apache.commons.math3.analysis.differentiation.MultivariateDifferentiableFunction;
import org.apache.commons.math3.exception.MathIllegalArgumentException;

import parser.Hyperedge;
import parser.NetNode;
import parser.Node;
import parser.Parser;

/**
 * This class implements the objective function interms of Log-Sum-Exponentiations.
 * <P>
 * It implements {@code MultivariateDifferentiableFunction} from
 * <a href="http://commons.apache.org/math/">Apache Commons Math</a> package.
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 * 
 */
public class LSE implements MultivariateDifferentiableFunction {
	
	double alpha, beta;
	int n, r;
	
	public LSE() {
		alpha = 3000;
		beta = 200;
		
		n = Parser.NumNodes;
		r =  Parser.r;
	}

	/**
     * Compute the value for the function at the given point.
     *
     * @param point Point at which the function must be evaluated.
     * @return the function value for the given point.
     */
	@Override
	public double value(double[] point) {
		double a,b,c,d,lsewl, x, y;
		
		lsewl = 0;
		for (Hyperedge edge : Parser.hypergraph) {
			a = b = c = d = 0;
			for (NetNode node : edge.netnodes) {
				int index = Parser.nodes.indexOf(node.n);
				if (index < r) {
					x = point[index];
					y = point[r + index];
				} else {
					x = node.n.ll_xcoord;
					y = node.n.ll_ycoord;
				}
				a += Math.exp(x/alpha);
				b += Math.exp(-x/alpha);
				c += Math.exp(y/alpha);
				d += Math.exp(-y/alpha);
			}
			lsewl += (Math.log(a) + Math.log(b) + Math.log(c) + Math.log(d))*alpha;
		}
		lsewl += beta*overlap(point);
		return lsewl;
	}

	private double overlap(double[] point) {
		double overlap = 0; 
		for (Node n : Parser.nodes) {
			int ni = Parser.nodes.indexOf(n);
			double nx;
			double ny;
			if (ni < r) {
				nx = point[ni];
				ny = point[ni + r];
			} else {
				nx = n.ll_xcoord;
				ny = n.ll_ycoord;
			}
			double nw = n.width;
			double nh = n.height;
			for (Node m : Parser.nodes) {
				if (n==m) {
					continue;
				}
				int mi = Parser.nodes.indexOf(m);
				double mx;
				double my;
				if (mi < r) {
					mx = point[mi];
					my = point[r+mi];
				} else {
					mx = m.ll_xcoord;
					my = m.ll_ycoord;
				}
				double mw = m.width;
				double mh = m.height;
				overlap += theta(nx-nw/2, nx+nw/2, mx-mw/2, mx+mw/2)*
							theta(ny-nh/2, ny+nh/2, my-mh/2, my+mh/2);
			}
		}
		return overlap;
	}
	
	private double theta(double a, double b, double c, double d) {
		double alpha = 20;
		double p = (Math.log(Math.exp(a/alpha) + Math.exp(c/alpha))); //max(L1,L2)
		double q = (Math.log(Math.exp(-b/alpha) + Math.exp(-d/alpha))); //min(R1,R2)
//		if(p>-q) 
//			return 0;
		return Math.expm1((-q-p)/alpha);
	}
	
	/**
     * Compute the value for the function at the given point using {@code DerivativeStructure}.
     *
     * @param point Point at which the function must be evaluated.
     * @return the function value for the given point.
     * @exception MathIllegalArgumentException if {@code point} does not
     * satisfy the function's constraints (wrong dimension, argument out of bound,
     * or unsupported derivative order for example)
     * 
     * @see DerivativeStructure
     */
	@Override
	public DerivativeStructure value(DerivativeStructure[] point) throws MathIllegalArgumentException {
		DerivativeStructure a,b,c,d,lsewl, x, y;
		DerivativeStructure p,q,m,s;
		
		lsewl = point[0].getField().getZero();
		for (Hyperedge edge : Parser.hypergraph) {
			a = point[0].getField().getZero();
			b = point[0].getField().getZero();
			c = point[0].getField().getZero();
			d = point[0].getField().getZero();
			for (NetNode node : edge.netnodes) {
				int index = Parser.nodes.indexOf(node.n);
				if (index < r) {
					x = point[index];
					y = point[r + index];
				} else {
					x = point[0].getField().getZero().add(node.n.ll_xcoord);
					y = point[0].getField().getZero().add(node.n.ll_ycoord);
				}
				a = a.add(x.divide(alpha).exp()); //Math.exp(x/alpha);
				b = b.add(x.divide(alpha).exp().reciprocal()); //Math.exp(-x/alpha);
				c = c.add(y.divide(alpha).exp()); //Math.exp(y/alpha);
				d = d.add(y.divide(alpha).exp().reciprocal()); //Math.exp(-y/alpha);
			}
			p = a.log();
			q = b.log();
			m = c.log();
			s = d.log();
			lsewl = lsewl.add(p).add(q).add(m).add(s).multiply(alpha);
		}
		lsewl = lsewl.add(calcOverlap(point).multiply(beta));
		return lsewl;
	}

	private DerivativeStructure calcOverlap(DerivativeStructure[] point) {
		DerivativeStructure ov = point[0].getField().getZero(); 
		for (Node n : Parser.nodes) {
			int ni = Parser.nodes.indexOf(n);
			DerivativeStructure nx;
			DerivativeStructure ny;
			if (ni < r) {
				nx = point[ni];
				ny = point[ni + r];
			} else {
				nx = point[0].getField().getZero().add(n.ll_xcoord);
				ny = point[0].getField().getZero().add(n.ll_ycoord);
			}
			double nw = n.width;
			double nh = n.height;
			for (Node m : Parser.nodes) {
				if (n==m) {
					continue;
				}
				int mi = Parser.nodes.indexOf(m);
				DerivativeStructure mx;
				DerivativeStructure my;
				if (mi < r) {
					mx = point[mi];
					my = point[r+mi];
				} else {
					mx = point[0].getField().getZero().add(m.ll_xcoord);
					my = point[0].getField().getZero().add(m.ll_ycoord);
				}
				double mw = m.width;
				double mh = m.height;
				DerivativeStructure tmp = thetaD(nx, nw, mx, mw).multiply(thetaD(ny, nh, my, mh));
				ov = ov.add(tmp);
			}
		}
//		System.out.println("***"+ov.getValue());
		return ov;
	}
	
	private DerivativeStructure thetaD(DerivativeStructure x1, double w1, DerivativeStructure x2, double w2) {
		if (w1 == 1 || w2 == 1)
			return x1.getField().getZero();
		double alpha = 20;
		DerivativeStructure a = x1.subtract(w1/2);
		DerivativeStructure b = x1.add(w1/2);
		DerivativeStructure c = x2.subtract(w2/2);
		DerivativeStructure d = x2.add(w2/2);
		
		DerivativeStructure p1 = a.divide(alpha).exp();
		DerivativeStructure p2 = c.divide(alpha).exp();
		DerivativeStructure p = p1.add(p2).log();//.multiply(alpha);
		
		DerivativeStructure q1 = b.divide(alpha).exp().reciprocal();
		DerivativeStructure q2 = d.divide(alpha).exp().reciprocal();
		DerivativeStructure q = q1.add(q2).log();//.multiply(alpha);
				
//		if(p.getValue()>-q.getValue()) 
//			return x1.getField().getZero();
		return q.negate().subtract(p).divide(alpha).expm1(); //-q-p
	}

}
