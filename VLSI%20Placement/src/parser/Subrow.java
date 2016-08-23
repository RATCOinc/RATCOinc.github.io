package parser;
/**
 * This class represents a subrow. The information about a row in the standard cell layout is kept here.
 * 
 * 
 * @author  Rathindra Nath Dutta, Arjaita Pal
 * @version 1.0
 * @since   2016-08-15
 */
public class Subrow {

	public int Coordinate,Height,Sitewidth,Sitespacing,SubrowOrigin,NumSites;
	public String Siteorient,Sitesymmetry;
	
	/**
	 * Constructs a {@code Subrow} type object with some initial values.
	 * @param coordinate the y-coordinate of the bottom most edge
	 * @param height the height of the subrow
	 * @param sitewidth the width of each site for placement
	 * @param sitespacing the gap between two placement
	 * @param siteorient the orientation for the site
	 * @param sitesymmetry the symmetricity of the site
	 * @param subrowOrigin the x-coordinates of the left most side
	 * @param numSites the number sites for placement in that subrow 
	 */
	public Subrow(int coordinate, int height, int sitewidth, int sitespacing,
			String siteorient, String sitesymmetry,	int subrowOrigin, int numSites) {
		
		this.Coordinate = coordinate;
		this.Height = height;
		this.Sitewidth = sitewidth;
		this.Sitespacing = sitespacing;
		this.Siteorient = siteorient;
		this.Sitesymmetry = sitesymmetry;
		this.SubrowOrigin = subrowOrigin;
		this.NumSites = numSites;
	}

	/**
	 * This method returns the string equivalent of {@code this} object.
	 */
	@Override
	public String toString() {
		return (Coordinate+"	"+Height+"	"+Sitewidth+"	"+Sitespacing+"	"+Siteorient+"	"+
						Sitesymmetry+"	"+SubrowOrigin+"   "+NumSites);
	}
	
}
