import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Random;

public class KWayMerge {
    static class MyValue { //this is a nested class, can be written in seperate file
        int val;
        int listIndex;

        MyValue(int val, int listIndex) {
            this.val = val;
            this.listIndex = listIndex;
        }

        @Override
        public String toString() {
            return val+""; //to convert to string
        }
    }

    public static void merge(ArrayList<ArrayList<MyValue>> lists, int k) {
        PriorityQueue<MyValue> heap = new PriorityQueue<>(k, new Comparator<MyValue>() {
            @Override
            public int compare(MyValue a, MyValue b) {
                return a.val - b.val;
            }
        });

        for (int i = 0; i < k; i++) {
            //remove 1st item of each list and put it into the heap
            heap.add(lists.get(i).remove(0));
        }

        ArrayList<MyValue> mergedList = new ArrayList<>();
        while( ! heap.isEmpty() ) {
            MyValue x = heap.remove(); //head
            mergedList.add(x);

            ArrayList<MyValue> xList = lists.get(x.listIndex);
            if( ! xList.isEmpty() )
                heap.add(xList.remove(0));
        }

        System.out.println(mergedList);
    }

    public static void main(String[] args) {
        Random r = new Random();

        int k = 3;
        ArrayList<ArrayList<MyValue>> lists = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            ArrayList<MyValue> list = new ArrayList<>();
            for (int j = 0; j < 5; j++) {
                list.add(new MyValue(r.nextInt(100), i));
            }
            Collections.sort(list, new Comparator<MyValue>() {
                @Override
                public int compare(MyValue a, MyValue b) {
                    return a.val - b.val;
                }
            });

            lists.add(list);
        }

        // System.out.println(lists);

        merge(lists, k);
    }
}