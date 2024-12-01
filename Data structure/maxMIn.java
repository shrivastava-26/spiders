import java.util.*;
public class maxMIn {

    // ! given the three number, 2nd maximum number and 2nd minimum number

    public static void main(String[] args) {

        System.out.println("Enter a number:");
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();


        if(a>b && a< c){
            System.out.println(" a is second maximum number and second minimum number" + a);
        }
        else if(b>a && b<c){
            System.out.println("b is second maximum number and second minimum number"+ "" + b);
        }
        else{
            System.out.println("c is second maximum number and minimum number" + c);
        }

         
    }
 

}
