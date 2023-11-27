const fibonacci = function(number) {

  let yourAnswer;
  let fiboSum = [1];
  let definitelyAGoodNumber = 0;

  function ensureAGoodNumber(num){
    if (typeof (parseInt(num)+1) == "number"){ //is it a number masquerading as a string? We are doing numbers
      if (parseInt(num) > 0) { // is it negaive number? We don't do negatives here
        return parseInt(num);
      } else{
        yourAnswer = "OOPS"; //if its not a good number, straight to the answer
      }
    } else {
      yourAnswer = "OOPS"; //if its not a good number, straight to the answer
    }
  }

  definitelyAGoodNumber = ensureAGoodNumber(number);

  // if its not a fail as per the 'OOPS' string, then go fibonacci!
  if (yourAnswer !== "OOPS") {
    for (let i = 0; i < definitelyAGoodNumber; i ++){
      if (i==0){
        yourAnswer = fiboSum[i];
        fiboSum.push(fiboSum[i]); 
        // console.log(`[${i}] fiboSum: ${fiboSum} | yourAnswer: ${yourAnswer}`)
      }else{
        yourAnswer = fiboSum[i];
        fiboSum.push(fiboSum[i-1]+fiboSum[i]);
        // console.log(`[${i}] fiboSum: ${fiboSum} | yourAnswer: ${yourAnswer}`)
      }
        
    }
  } 

  return yourAnswer;

};

// Do not edit below this line
module.exports = fibonacci;
