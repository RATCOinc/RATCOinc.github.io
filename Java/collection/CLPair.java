import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Random;

public class CLPair {
    static int naive(ArrayList<Point> points) {
        //it returns the delta value for verification
        int delta = Integer.MAX_VALUE;
        for (int i = 0; i < points.size()-1; i++) {
            Point p = points.get(i);
            for (int j = i+1; j < points.size(); j++) {
                int d = p.distance(points.get(j));

                if(d < delta) {
                    delta = d;
                }
            }
        }
        return delta;
    }

    static int improved(ArrayList<Point> points) {
        ArrayList<Point> xSorted = (ArrayList<Point>) points.clone();
        ArrayList<Point> ySorted = (ArrayList<Point>) points.clone();
        //need to clone, otherwise only reference would be copied
        //typecasting required as clone() has return type Object
        //keep in mind that objects(points) in the two lists are same (not clone)

        Collections.sort(xSorted, new Comparator<Point>() {
            @Override
            public int compare(Point a, Point b) {
                return a.x - b.x;
            }
        });

        Collections.sort(ySorted, new Comparator<Point>() {
            @Override
            public int compare(Point a, Point b) {
                return a.y - b.y;
            }
        });

        System.out.println(xSorted);
        // System.out.println(ySorted);

        int delta = recursiveCLPair(xSorted, ySorted);

        return delta;
    }

    static int recursiveCLPair(ArrayList<Point> xSorted, 
                                ArrayList<Point> ySorted) {

        if(xSorted.size() <= 3) {
            return naive(xSorted);
        }
        
        ArrayList<Point> xSortedLeft = new ArrayList<>();
        ArrayList<Point> xSortedRight = new ArrayList<>();
        ArrayList<Point> ySortedLeft = new ArrayList<>();
        ArrayList<Point> ySortedRight = new ArrayList<>();;

        for (int i = 0; i < xSorted.size()/2; i++) {
            Point p = xSorted.get(i);
            p.isLeft = true;
            xSortedLeft.add(p);
        }
        for (int i = xSorted.size()/2; i < xSorted.size(); i++) {
            Point p = xSorted.get(i);
            p.isLeft = false;
            xSortedRight.add(p);
        }
        for (int i = 0; i < ySorted.size(); i++) {
            Point p = ySorted.get(i);
            if(p.isLeft) {
                ySortedLeft.add(p);
            } else {
                ySortedRight.add(p);
            }
        }

        // System.out.println(xSortedLeft);
        // System.out.println(xSortedRight);
        // System.out.println(ySortedLeft);
        // System.out.println(ySortedRight);

        int deltaLeft = recursiveCLPair(xSortedLeft, ySortedLeft);
        int deltaRight = recursiveCLPair(xSortedRight, ySortedRight);
        int delta = deltaLeft < deltaRight ? deltaLeft : deltaRight;

        //form the strip
        ArrayList<Point> ySortedStrip = new ArrayList<>();
        Point xMid = xSorted.get(xSorted.size()/2);
        for (int i = 0; i < ySorted.size(); i++) {
            Point p = ySorted.get(i);
            if(Math.abs(xMid.y - p.y) <= delta) {
                ySortedStrip.add(p);
            }
            
        }

        //check on these strip points
        for (int i = 0; i < ySortedStrip.size()-1; i++) {
            Point p = ySortedStrip.get(i);
            for (int j = 1; j < 8; j++) {
                if(i+j < ySortedStrip.size()) {
                    int d = p.distance(ySortedStrip.get(i+j));
                    if(d < delta) {
                        delta = d;
                    }
                }
            }
        }

        return delta;
    }

    public static void main(String[] args) {
        ArrayList<Point> points = new ArrayList<>();
        // points.add(new Point(10, 2));
        // points.add(new Point(1, 20));
        // points.add(new Point(10, 24));
        // points.add(new Point(2, 2));

        Random r = new Random();
        for (int i = 0; i < 20; i++) {
            points.add(new Point(r.nextInt(100), r.nextInt(100)));
        }
        // points.add(new Point(32,59));
        // points.add(new Point(34,89));
        // points.add(new Point(57,44));
        // points.add(new Point(61,93));
        // points.add(new Point(89,6));

        int delta = naive(points);
        System.out.println(delta);

        delta = improved(points);
        System.out.println(delta);
    }
}

