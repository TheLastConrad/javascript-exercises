const repeatString = function(string, num) {

  let finalWord = "";

  if (num >= 0){

    for (let i=0; num > i; i++){
      finalWord += string;
    }

    return finalWord;

  } else {
    return "ERROR";
  }


};


// Do not edit below this line
module.exports = repeatString;
