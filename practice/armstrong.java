import java.util.*;
public class armstrong {

	public static void main (String args[] )
	{

	System.out.println("Enter a Number:");
	
	Scanner sc = new Scanner(System.in);
	int number = sc.nextInt();
	
	int newStore = number;
	int sum =0;
	int digits = String.valueOf(number).length();
	

	while(number>0)
	{
	  int digit = number % 10;
	  sum += Math.pow(digit, digits);
	  number /= 10;
	}
	

	if(sum == newStore ){
	System.out.println("Armstrong NUmber");
	}
	 
	else{
	System.out.println("not an Armstrong number");
	}

	}

}
