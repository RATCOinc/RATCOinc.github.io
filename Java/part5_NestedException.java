class NestedException {
    int[] arr;
    void update(int index, int scale) {
        arr[index] /= scale;
    }

    void foo(int scale) {
        for (int i = 0; i <= arr.length; i++) { //error
            try { update(i, scale); }
            catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Invalid index");
            }
        }
    }

    public static void main(String[] args) {
        NestedException obj = new NestedException();
        // obj.arr = new int[10];

        try { 
            obj.foo(0);
            // obj.foo(1);
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}