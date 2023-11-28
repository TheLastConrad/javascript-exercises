const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(arr) {

  let arrCopy = arr;
  // Get an Array of all the ages in order
  lineUpAgesIntoAgeArray(arr);

  // Get the lowest value of ageArray and output it
  
  for (let i=0; i < (ageArray.length-2); i++){   
    if (ageArray[i] > ageArray[i+1]) {
      oldestAge = ageArray[i];
      oldestPerson = arrCopy[i]
    } else if (ageArray[i] < ageArray[i+1]){
      oldestAge = ageArray[i+1];
      oldestPerson = arrCopy[i+1];
    }

    
  }

  return oldestPerson;



};

let ageArray = [];
let oldestPerson = {};
let oldestAge = 0;

function lineUpAgesIntoAgeArray(arr){
  arr.forEach(element => {
    // console.log(`lineUpAgesIntoAgeArray: element(${element.name}) birth(${element.yearOfBirth}), death(${element.yearOfDeath}) `)
    ageArray.push(calculateAge(element.yearOfBirth, element.yearOfDeath))
    // console.log(ageArray.[element.name-1]);

  
  });


}

function calculateAge(birth, death){
  if (death == undefined){ 
    death = 2023
    }
      
  return death - birth;
};




// Do not edit below this line
module.exports = findTheOldest;
