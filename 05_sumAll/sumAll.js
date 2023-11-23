const sumAll = function(num1, num2) {

  let smallerNum = 0;
  let biggerNum= 0;

  let sum=0;

  function sortNum(x, y) {
    console.log(`    sortNum started! x = (${x}) y = (${y})`)
    if (x > y) {
      smallerNum = y;
      biggerNum = x;
      // console.log(`    looks like x = (${x})  IS GREATER THAN y = (${y})`)

    } else if (y > x){
      smallerNum = x;
      biggerNum = y;
      // console.log(`    sortNum started! x = (${x}) IS LESS THAN y = (${y})`)
    }

    // console.log(`    sortNum end: biggerNum = (${biggerNum}) smallerNum = (${smallerNum})`)
  }

  function isItAValidNumber(num){
    if (typeof num != "number") {
      // console.log(`  is '(${num})' a number? NOPE!`)
      return false;
      
    }else {
      // console.log(`  is '(${num})' a number? Yep! ✔ But is it a good number? ...`)
      if (num >= 0 ){
        // console.log(`    is '(${num})' a POSITIVE number? Yep! ✔ Its a good number!`)
        return true
      }else {
        // console.log(`    is '(${num})' a POSITIVE number? Nope! That's a BAD number!`)
        return false;

      }
      
    }
  }




  // go time on everything
  // first initial checks final result go into smallerNum and biggerNum
  // console.log(`\n***** START RUN *****`)

  // console.log(`=== test run: core logic enacted ===`)
    if (isItAValidNumber(num1) && isItAValidNumber(num2)){
      sortNum(num1,num2); //should sort to the global smallerNum and biggerNum

      for (let i = smallerNum; i <= biggerNum; i++){
      sum += i;
      // console.log(`... i(${i}) has been added. current sum = ${sum}`)
      }
    } else {
      sum.toString();
      sum = 'ERROR';
    }

  // console.log(`=== test run: final output ===`)

  return sum;

  // console.log(`***** END RUN *****\n\n`)
};

// Internal testing, comment out before submit
// console.log(sumAll(2,15));
// Do not edit below this line
module.exports = sumAll;
