const add = function(x,y) {
  return x+y;
	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function() {
  let sum = 0;

  let args = [...arguments].flat()

	for (let i in args){
    sum += parseInt(args[i]);
  }

  return sum;
};

const multiply = function() {
  let product = 1;
  let args = [...arguments].flat();
  
  console.log(args[0])
  console.log(args[1])

  for (let i=args.length-1; i >= 0; i--) {
   
    product *= args[i];
    
    // console.log(`pass ${i} , working with ${args[i]} ... current product: [${product}]`)
    
  }

  return product;

};


const power = function(x,y) {
  return x**y;
	
};

const factorial = function(x) {

  let fac = 1;

  for (let i = x; i > 0 ; i--){

    fac *= i;

  }

  return fac;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
