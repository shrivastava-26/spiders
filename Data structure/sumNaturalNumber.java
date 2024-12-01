import java.util.*;
public class sumNaturalNumber {
    
    public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();

    int sum = 0;
    int i;


    for ( i=0; i<=num; i++ ){
        sum= sum + i;
    }

    System.out.println(sum);

    }

    // int sum = n*(n+1)/2;
    // System.out.println(sum);

    

}
