import java.util.*;
public class helloNew {

    //! given the three distinct number print the middle number, 

    public static void main(String[] args) {
        
        System.out.println("Enter three numbers:");
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();


        if ( (a>b && a < c) || (a>c && a <b) ){
            System.out.println(" a is middle number" + a);
        }
        
        else if( (b>a && b<c) || (b>c && b <a)){
            System.out.println("b is middle number" + b);
        }

        else{
            System.out.println( " c is middle number" + c);
        }
    }
}
