public class new20{
    

    public static void main(String[] args) {

        //given the month number we need to print corresponding number of days 

            // int month = 31;

            // int rem = month % 7;

            // if (rem==0){
            //     System.out.println("sunday");
            // }

            // else if(rem==1){
            //     System.out.println("Monday");
            // }

            int month=12;
            if( month >=1 && month <=12){

                System.out.println("this is valid month");
            }
            else{
                System.out.println("INvalid month");
            }
            

            if(month ==1 || month ==3 || month == 5 || month == 7 || month == 9 || month ==11){
                System.out.println("month having 31 days");
            }
            else if(month ==4 || month ==6 || month==8 || month==12 ){
                System.out.println("month having 30days");
            }
            
            else{
                System.out.println("having 28 days ");
            }

        
    }
}