import java.util.*;
public class DrivingLicense {
    public static void main (String args[]){


        // ? given a set of three inputs, you should determine if you should be allowed
        // drive or not (inputs in the form of booleans)
        // ! 1) you havi driving license
        // 2) you are tired
        // 3) you are sober

        // only you can drive, when all these conditions met

        Scanner sc = new Scanner(System.in);
        System.out.println("can you drive:");
        boolean hasDl = sc.nextBoolean();
        System.out.println("are you tired?");
        boolean isTired = sc.nextBoolean();
        System.out.println("are you drunk?");
        boolean isSober = sc.nextBoolean();


        if(hasDl && !isTired && isSober){
            System.out.println("You can drive.");
        }
        else{
            System.out.println("You can not drive.");
        }

    }
}
