public class seatAllocation {
    


    public static void main(String[] args) {
        

        // given the seat number, predict the seating arrangement assume 86 compartment

        // int compartment = 86;
        int seat= 27;

        int num = seat %8;

        if(num == 1){
            System.out.println("side lower");
        }
        else if(num == 2){
            System.out.println("side upper");
        }
        else if(num ==3 || num ==6){
            System.out.println("lower");
        }
        else if(num ==4 ){
            System.out.println("lauda");
        }

        
    }
}
