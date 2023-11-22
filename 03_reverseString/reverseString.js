const reverseString = function(word) {

  let newWord=[];

  for (let letter in word) {
    // newWord.unshift(word.shift());
    newWord.unshift(word[letter]);

  };

  return newWord.join("");

};

// console.log(reverseString('frame'));

// Do not edit below this line
module.exports = reverseString;
