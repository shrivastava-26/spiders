import java.util.*;
public class new3rd {
    //! given a number print sanju if it is divisible by 3, print gita if it is divisible by 5, print sanju and gita if it is divisible by 3 and 5

    public static void main(String[] args) {

        System.out.println("Enter a number:");
        Scanner sc = new Scanner( System.in);
        int num = sc.nextInt();

        if(num % 3==0  && num %5 ==0){
            System.out.println("sanju weds gita");
        }
        else if(num % 3 == 0){
            System.out.println("sanju");
        }
        else if(num % 5 == 0){
            System.out.println("gita");
        } 
        else{
            System.out.println("this is not divisible by 3 or 5 or 3 and 5");
        }
        
    }
}
