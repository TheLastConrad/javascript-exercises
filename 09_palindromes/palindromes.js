const palindromes = function (word) {
  
  let freshArg = word;

  //take out caps and punctuation
  let stringNoPunct = freshArg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  let pureString = stringNoPunct.replace(/[\s]/g,"");
  

  let origWord = pureString.toLowerCase();

  let revWord = (Array.from(origWord)).reverse().join('');

  
  if (revWord === origWord) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
