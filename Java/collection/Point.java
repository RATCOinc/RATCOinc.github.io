public class Point {
    int x, y;
    boolean isLeft;

    Point(int x, int y) {
        this.x = x;
        this.y = y;

        isLeft = false;
    }

    public int distance(Point p) {
        return (this.x-p.x)*(this.x-p.x) + (this.y-p.y)*(this.y-p.y);
        //no need to perform square root
    }

    @Override
    public String toString() {
        return "(" + x + "," + y + ")";
    }
}

