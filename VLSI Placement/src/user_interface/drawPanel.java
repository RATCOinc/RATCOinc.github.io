package user_interface;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;

import javax.swing.JPanel;

import parser.Node;
import parser.Parser;

public class drawPanel extends JPanel{
	
	myFrame f;

	public drawPanel(myFrame f) {
		super();
		setPreferredSize(new Dimension(500, 500));
		setBackground(Color.WHITE);

		this.f = f;		
	}
	
	@Override
	public void paint(Graphics g) {
		super.paint(g);
		((Graphics2D)g).scale(3, 3);
		g.setColor(Color.BLUE);
		if (Parser.nodes == null)
			return;
		for (Node node : Parser.nodes) {
			g.drawRect((int)node.ll_xcoord, (int)node.ll_ycoord, node.width, node.height);
		}		
	}
}
