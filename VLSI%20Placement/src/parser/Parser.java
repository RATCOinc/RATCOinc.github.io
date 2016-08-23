package parser;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;

/**
 * This class parses the input data files presented in Bookshelf format.
 * <p>
 * This class will have no instances, all members and methods are publicly accessible.
 * <P>
 * The read data is also stored here in static fields.
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class Parser {
	public static ArrayList<Node> nodes;
	public static ArrayList<Hyperedge> hypergraph;
	public static ArrayList<Subrow> scl;
	
	/**
	 * file names
	 */
	public static String NODES, NETS, SCL, PL, WTS;
	
	public static int NumNodes, NumTerminals, r;
	public static ArrayList<Node> movable,fixed;
	
	public static int NumNets,NumPins;
	
	public static int NumRows;
    
	
	/**
	 * This prevents creation of any instance of this class
	 */
	private Parser() {
		//nothing here!
	}
	
	/**
	 * This method initializes the fields.
	 */
	public static void init() {
		nodes = new ArrayList<>();
		hypergraph = new ArrayList<>();
		scl = new ArrayList<>();
	}
	
	/**
	 * This method reads the data into the fields.
	 * 
	 * @param auxFilePath the path to the .aux file.
	 * 
	 */
	public static void parseData(String auxFilePath) {
		readAUXfile(auxFilePath);
		
	}

	/**
	 * This method reads the .aux file and initiates parsing of other files.
	 * 
	 * @param auxFilePath the path to the .aux file.
	 * 
	 */
	private static void readAUXfile(String auxFilePath) {
		BufferedReader in = null;
		
		try {
		    File AUXfile = new File(auxFilePath);
			in = new BufferedReader(new FileReader(AUXfile));
		    String line;
		    
		    line = in.readLine();
		    line=line.split(":")[1];

		    String[] fileNames = line.trim().split("\\s+");
		    
		    for (String file : fileNames) {
				if (file.endsWith(".nodes"))
					NODES = file;
				else if (file.endsWith(".nets"))
					NETS = file;
				else if (file.endsWith(".scl"))
					SCL = file;
				else if (file.endsWith(".pl"))
					PL = file;
				else if (file.endsWith(".wts"))
					WTS = file;
			}
		    
		    
		    /**
		     * read other files
		     */
		    String parentDirName = AUXfile.getParent(); // to get the parent dir name
			if (parentDirName == null)
				parentDirName = ".";
		    readNODESfile(parentDirName+File.separator+NODES);
		    readNETSfile(parentDirName+File.separator+NETS);
		    readWTSfile(parentDirName+File.separator+WTS);
		    readPLfile(parentDirName+File.separator+PL);
		    readSCLfile(parentDirName+File.separator+SCL);
		}
		catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (in != null) {
		        try {
		            in.close();
		        } catch (Exception ignored) {}
		    }
		 }
	}

	/**
	 * This method reads the .nodes file and stores the information about nodes.
	 * 
	 * @param NODESfile the path to the .nodes file.
	 * 
	 */
	private static void readNODESfile(String NODESfile) {
		BufferedReader in = null;
		try {
		    in = new BufferedReader(new FileReader(new File(NODESfile)));
		    String line;
		    String[] tokens;
		    // .nodes file parsing starts
		    while ((line=in.readLine()) != null){
		    	
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				tokens = line.split(":");
				if (tokens[0].trim().equalsIgnoreCase("NumNodes"))
					Parser.NumNodes = Integer.parseInt(tokens[1].trim());
				else if (tokens[0].trim().equalsIgnoreCase("NumTerminals")){
					Parser.NumTerminals = Integer.parseInt(tokens[1].trim());
					break;
				}
		    }
		    
		    movable = new ArrayList<>(NumNodes-NumTerminals);
		    fixed = new ArrayList<>(NumTerminals);
		    int i=0;
		    
		    //read node information
		    while ((line=in.readLine()) != null){
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				tokens = line.split("\\s+");
				
				String nodeName = tokens[0];
				int width = Integer.parseInt(tokens[1]);
				int height = Integer.parseInt(tokens[2]);
				
				if (tokens.length < 4)
					movable.add(new Node(nodeName, width, height, Move.movable));
				else if (tokens[3].equalsIgnoreCase("terminal")) 
					fixed.add(new Node(nodeName, width, height, Move.terminal));
				else
					fixed.add(new Node(nodeName, width, height, Move.terminal_NI));
		    }
		    
		    //put all nodes into a single list
		    nodes.addAll(movable);
		    nodes.addAll(fixed);
		    
		    //calculate the number of moveable nodes
		    r =  NumNodes - NumTerminals;
			
				
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (in != null) {
		        try {
		            in.close();
		        } catch (Exception ignored) {}
			}
		 }
		
	}


	/**
	 * This method reads the .nets file and stores the information about nets.
	 * 
	 * @param NETSfile the path to the .nets file.
	 * 
	 */
	private static void readNETSfile(String NETSfile) {
		BufferedReader in = null;
		try {
		    in = new BufferedReader(new FileReader(new File(NETSfile)));
		    String line;
		    String[] tokens,tokensright;
		    // .nets file parsing starts
		    while ((line=in.readLine()) != null){
		    	
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				tokens = line.split(":");
				if (tokens[0].trim().equalsIgnoreCase("NumNets"))
					NumNets = Integer.parseInt(tokens[1].trim());
				else if (tokens[0].trim().equalsIgnoreCase("NumPins")){
					NumPins = Integer.parseInt(tokens[1].trim());
					break;
				}
		    }
		    
		    int i=0;
		    //read node information
		    while ((line=in.readLine()) != null){
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				tokens = line.split(":");
				tokensright = tokens[1].trim().split("\\s+");
				
				if (tokens[0].trim().equalsIgnoreCase("NetDegree")) {
					int degree_of_this_net = Integer.parseInt(tokensright[0]);
					String net_name = tokensright[1];
					
					String[] netdata = new String[degree_of_this_net];
					for (int j = 0; j < degree_of_this_net; j++) {
						line = in.readLine();
						netdata[j] = line.trim();
					}
					hypergraph.add(new Hyperedge(degree_of_this_net, net_name, netdata));
				}
		    }
		}
		catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (in != null) {
		        try {
		            in.close();
		        } catch (Exception ignored) {}
			}
		 }
	}

	/**
	 * This method reads the .scl file and stores the information about the standard cell layout.
	 * 
	 * @param SCLfile the path to the .scl file.
	 * 
	 */
	private static void readSCLfile(String SCLfile) {
		BufferedReader in = null;
		
		try {
		    in = new BufferedReader(new FileReader(new File(SCLfile)));
		    String line;
		    
		    String[] tokens = null,lines;
		    
		    // .scl file parsing starts
		    while ((line = in.readLine()) != null){
		    	
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				tokens = line.split(":");
				if (tokens[0].trim().equalsIgnoreCase("NumRows"))
					NumRows = Integer.parseInt(tokens[1].trim());
					break;
			}
		    
		    int i=0,j=0;
		    
		  //read node information
		    while ((line=in.readLine()) != null){
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				else if (line.equalsIgnoreCase("CoreRow Horizontal")) {		//data storing start
					lines = new String[7];	// 7 lines in a single numrow
					line=in.readLine();
					do {	// loop continues until it gets "End"
						line = line.split("#")[0].trim(); //discard the comments if any
						if (line.isEmpty())
							continue;	//skip the line if no valid info is there
						
						tokens = line.split(":");
						lines[j++] = tokens[1].trim();	// right part of the ":" i.e. valid data
						line = in.readLine();
					}while (! line.equalsIgnoreCase("End"));
						
						int Coordinate = Integer.parseInt(lines[0]);
						int Height = Integer.parseInt(lines[1]);
						int Sitewidth = Integer.parseInt(lines[2]);
						int Sitespacing = Integer.parseInt(lines[3]);

						String Siteorient = lines[4];
						String Sitesymmetry = lines[5];
						
						// two ":" exists in the last line of NumRow
						 // middle part of tokens is like "String   int", so split it again w.r.t. space, and take int part
						int SubrowOrigin = Integer.parseInt(tokens[1].split("\\s+")[1].trim());
						int NumSites = Integer.parseInt(tokens[2].trim());
						
						scl.add(new Subrow(Coordinate,Height,Sitewidth,Sitespacing,
													Siteorient,Sitesymmetry,SubrowOrigin,NumSites));
				}
		    }
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (in != null) {
		        try {
		            in.close();
		        } catch (Exception ignored) {}
			}
		 }
	}

	/**
	 * This method reads the .pl file and stores the extra information about nodes.
	 * 
	 * @param PLfile the path to the .pl file.
	 * 
	 */
	private static void readPLfile(String PLfile) {
		BufferedReader in = null;
		try {
		    in = new BufferedReader(new FileReader(new File(PLfile)));
		    String line;
		    String[] tokens;
		    
		    int i = 0;
		    while ((line=in.readLine()) != null){
		    	
				line = line.split("#")[0].trim(); //discard the comments if any
				if (line.isEmpty())
					continue;	//skip the line if no valid info is there
				
				line = line.trim();
				tokens = line.split("(\\s+:\\s+)|(\\s+)");
				
				String node_name = tokens[0];
				int ll_xcoord = Integer.parseInt(tokens[1]);
				int ll_ycoord = Integer.parseInt(tokens[2]);
				String orientation = tokens[3];
				Node n = null;
				for (Node node : nodes) {
					if (node.nodeName.equalsIgnoreCase(node_name)){
						n = node;
						break;
					}
				}
				n.ll_xcoord = ll_xcoord;
				n.ll_ycoord = ll_ycoord;
				n.orientation = orientation;
		    }
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (in != null) {
		        try {
		           // in.close();
		        } catch (Exception ignored) {}
			}
		 }
	}

	/**
	 * This method is for .wts file and does nothing.
	 * 
	 * @param WTSfile the path to the .wts file.
	 * 
	 */
	private static void readWTSfile(String WTSfile) {
		//nothing here
	}
}
