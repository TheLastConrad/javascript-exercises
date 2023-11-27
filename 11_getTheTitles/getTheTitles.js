const getTheTitles = function(array) {
  let finalArray = [];
  array.forEach((element) => finalArray.push(element.title));
  return finalArray;
};

// Do not edit below this line
module.exports = getTheTitles;
