import java.util.*;
public class maxOfThree {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a> b && a> c){
            System.out.println("a is bigger than b and c");
        }
        else if(b >a && b >c ){
            System.out.println("b is bigger than a and c");
        }

        else{
            System.out.println("c is bigger than a and b");
        }

    }
}
