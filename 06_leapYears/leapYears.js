// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)

const leapYears = function(year) {
  //years divisible by 100 are not leap years ... they are divisible by 400
  // console.log( `${year} % 100 = ${year%100}` )
  if ( year % 100 == 0) {
    if ( year % 400 == 0){
      // console.log( `${year} % 400 = ${year%400}` )
      return true;
    }else{
      return false;
    }
  } else if (year % 4 == 0) {
    // console.log( `${year} % 4 = ${year%4}` )
    return true;
  } else {
    return false;
  }

  //Leap years are years divisible by four (like 1984 and 2004). 


  
//   //Fails on year 700 and 1900
//   console.log( `${year} % 4 = ${year%4}` )
//   if (year % 4 == 0 ) {
//     return true
//   }else{
//   //years divisible by 100 are not leap years ... they are divisible by 400
//     console.log( `${year} % 100 = ${year%100}` )
//     if(year % 100 != 0){
//       console.log( `${year} % 400 = ${year%400}` )
//       if(year % 400 == 0){
//         return true
//       } else {
//         return false
//       }
//     } else {
//       return true
//     }
//   }
// };

}
leapYears(1997);

// Do not edit below this line
module.exports = leapYears;
