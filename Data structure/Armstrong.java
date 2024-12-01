import java.util.*;
class Armstrong {

    public static void main (String args[])
    {

        System.err.println("enter a number:");
        //! taking input by user whether armstrong number or not
        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();

        // ? store in another variable to compare in last

        int storeCheck = number;

        //! for storing after summation
        int sum = 0;

        // ? calculating all digits present in number to find armstrong number
        int digits = String.valueOf(number).length();


        //calculating and checking armstrong number
        while (number > 0 ) {

            // last digit
            int digit = number % 10;

            //last digit raise to digits summation
            sum += Math.pow(digit, digits);


            //remove last digit
            number = number/10;
        }
        

        if(sum == storeCheck){
            System.out.println("Armstrong number");
        }
        else{
            System.out.println("Not Armstrong number");
        }
    }
}