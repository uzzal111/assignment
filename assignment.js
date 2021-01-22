   // kilometerToMeter

   
   function kilometerToMeter(km){
       if (typeof km!= "number"){
           var errorText = "please input number"
           return errorText;
       }else{
      // 1km = 1000 meter
       var meter = km * 1000;
       return meter;
       }
   }
   
   
   
   //budgetCalculator
   
   
   
   
   function budgetCalculator(clock, phone, laptop) {
    if(clock < 0 || phone < 0 || laptop < 0){
        var errorText = "nagative number are not allowed"
        return errorText;
    }
    else{
var total = clock * 50 + phone * 100 + laptop * 500;
return total
    }
   
}



//hotelCost


function hotelCost(totaldays){
  var totalStep = 0;
  if (totaldays < 0 || typeof (totaldays) != "number"){
      var error = "You didn't booking singal day!"
      return error;
  }
   else if (totaldays <=10){
       totalStep =100 * totaldays;
   }else if(totaldays <= 20){
       var firstStep = 100 * 10;
       var remaining = totaldays - 10;
       var secondStep = remaining * 80;
       totalStep = firstStep + secondStep;
   }
   else{
    var firstStep = 100 * 10;
    var secondStep = 80 * 10;
    var remaining = totaldays - 20;
    var thirdStep = remaining * 50;
    totalStep = firstStep + secondStep + thirdStep;
   }
     return totalStep;
}


//MegaFriend

   function megaFriend(friends = [ "a ,b , c , d"]) {
       var largName = friends[0];
       for(i = 0; i < friends.length; i++) {
            if (friends[i].length > largName.length){
               largName = friends[i];
               

           }
       }
       return largName
   }
   
   
