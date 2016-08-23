package user_interface;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JPanel;

import parser.Parser;
import placer.Legalizer;
import placer.QP;
import placer.myNLP;



public class myFrame extends JFrame{

	JButton file, qp, nlp, legalize;
	JPanel topPanel;
	drawPanel dp;
	
	String filepath;
	
	public myFrame() {
		super();
		topPanel = new JPanel();
		
		file = new JButton("OPEN");
		topPanel.add(file);
		file.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				JFileChooser jf = new JFileChooser();
				File workingDirectory = new File(System.getProperty("user.dir"));
				jf.setCurrentDirectory(workingDirectory);
				int returncode = jf.showOpenDialog(myFrame.this);
				if (returncode == JFileChooser.APPROVE_OPTION) {
					filepath = jf.getSelectedFile().getAbsolutePath();
				}
				Parser.init();
				Parser.parseData(filepath);
			    System.out.println("All files are parsed");
				dp.repaint();
			}
		});
		
		qp = new JButton("Quadratic solver");
		topPanel.add(qp);
		qp.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				QP.solve();
				dp.repaint();
			}
		});
		
		nlp = new JButton("Nonlinear solver");
		topPanel.add(nlp);
		nlp.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				myNLP.solve();
				dp.repaint();
			}
		});
		
		legalize = new JButton("Legalize");
		topPanel.add(legalize);
		legalize.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				Legalizer.Legalize();
				System.out.println("The final HPWL: "+Driver.hpwl());
				System.out.println("Total overlap: "+Driver.calcOverlap());
				Driver.writeFile("output.pl");
				System.out.println("Output file saved into current directory.");
				dp.repaint();
			}
		});
		
		this.add(topPanel, BorderLayout.NORTH);
		
		dp = new drawPanel(this);
		this.add(dp, BorderLayout.SOUTH);
		
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		pack();
		setVisible(true);
	}
}
