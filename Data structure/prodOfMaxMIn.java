import java.util.*;
public class prodOfMaxMIn {

    //! print the product of maximum and minimum element among the three number

    public static void main(String[] args) {

        System.out.println("Enter three numbers:");
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int max;
        int min;

        if( a> b && a> c){
            max = a;
        }
        else if(b> a && b>c){
             max = b;
        }
        else{
            max = c;
        }

        if(a<b && a<c){
            min = a;
        }
        else if(b<a && b<c){
            min = b;
        }
        else{
            min =c;
        }
        
        int prod = max*min;
        //! product of max and min
        System.out.println("product of " + max + "and" + min + " will be:" + prod );

         
    }
}
