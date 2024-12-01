import java.util.Scanner;

public class distinction {
    public static void main(String[] args) {
        
    
    Scanner sc = new Scanner(System.in);

    int a =sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();

    int avg  = (a+ b+ c)/3;

    if(a>35 && b> 35 && c> 35){

        System.out.println("passed");
        System.out.println(avg);
        if(avg >90){
            System.out.println("distinction");
        }
        else if(avg >60 && avg <80){
            System.out.println("first class distinction");
        }
        else if( avg >50 && avg < 60){
            System.out.println("2nd division");
        }
        else{
            System.out.println("just passed");
        }

    }
    else{
        System.out.println("failed");
    }

    }

}
