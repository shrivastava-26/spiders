import java.util.Scanner;

public class h20thNov {


    // !check whether the number is single digit or not
    //? check whether the number is double digit or not
    //check whether the number is triple digit or not

    public static void main(String[] args) {
        

        Scanner sc  = new Scanner(System.in);

        int num = sc.nextInt();

        // if(num >= -9 && num <= 9){
        //     System.out.println("single digit num");
        // }
        // else{
        //     System.out.println("not single digit");
        // }

        // if((num >=-99 && num< -10) || (num >= 10 && num <=99) ){
        //     System.out.println("Double digit num");
        // }

        // else{
        //     System.out.println("not double digit");
        // }

        if((num <= -999 && num>= -100) || (num <= 999 && num>= 100)){
            System.out.println("three digit number");
        }

        else{
            System.out.println("not three digit num");
        }


    }
    
    
}
