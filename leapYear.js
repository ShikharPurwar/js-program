
     function leap (year){ 
if(year%4==0){
            if(year%100==0 && year%400==0 || year%100!=0){
                return "Your year is leap year"
            }
    
        }
        else{
            return "Year is Not leap Year"
        }
    }
    var year = leap(2001);
    console.log(year); 
