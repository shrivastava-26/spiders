import java.util.*;
public class prime {

    public static void main(String[] args) {
        
    System.out.println("Enter a number:");
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();

    if(isPrime(num)){
        System.out.println("prime number");
    }
    else{
        System.out.println("not prime.");
    }
    }


    public static boolean isPrime(int n){

        if(n<2){
            return false;
        }

        for(int i =2; i<Math.sqrt(n); i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
