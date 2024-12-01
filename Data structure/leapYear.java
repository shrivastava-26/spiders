import java.util.*;
public class leapYear {

    // ! check whether the year is leap year or not

    public static void main (String args[]){

        System.out.println("enter year:");

        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();

        if(( year % 4 == 0 && year % 100 !=0 )|| (year % 400 ==0)) {
            System.out.println("leap year");

        }
        else{
            System.out.println("not leap year");
        }

    }
        
    
}

/*
 * for leap year 
 * year is divided by 4 but should not divided by 100
 * 
 */