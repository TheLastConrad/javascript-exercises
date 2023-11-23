const removeFromArray = function() {

  let arr = Array.prototype.slice.call(arguments[0]);

  let args = Array.prototype.slice.call(arguments, 1);

  // let finalArr = [];

  // return args; faulty: if I pass in ([1,2,3,4,5,6], 1, 3, 4, 4, 5, 6, 7, 6, 24, ), it will return [ 2, 3, 5 ]

  for (let argItem in args){
    console.log(`\nChecking argItem "${args[argItem]}" ... `)

    for (let arrItem in arr) {
        console.log(`... against arrItem "${arr[arrItem]}" ...`)

        if (args[argItem] === arr[arrItem]){
          console.log(`   ... FOUND IT! Target argItem (${args[argItem]}) equals arrItem ("${arr[arrItem]}" at position ${arrItem})`);
          let x = arr.splice(arrItem, 1);
          console.log(`( to be clear, I am removing "${x}" from the list ... hopefully ...`)

          

        }
    }
  }


  // // faulty: with ([1, 2, 3, 4], 3, 2) it returns 1, 3, and 4 for some reason, should return 1 and 4

  // for (let arrItem = 0; arrItem < arr.length; arrItem++) {
  //   console.log(`\nChecking arrItem "${arr[arrItem]}" ... `)
    
  //   for (let argItem = 0; argItem < args.length; argItem++){
  //   console.log(`... against argItem "${args[argItem]}" ...`)

      

  //       if (args[argItem] == arr[arrItem]){
  //         console.log(`   ... FOUND IT! Target argItem (${args[argItem]}) equals arrItem ("${arr[arrItem]}" at position ${arrItem})`);
  //         let x = arr.splice(arrItem, 1);
  //         console.log(`( to be clear, I am removing "${x}" from the list ... hopefully ...`)
  //         console.log(`   *** CURRENT ARRAY: ${arr} ***   `)
  //       }
  //     }
  //   }

  

  // // return args; faulty: if I pass in ([1,2,3,4,5,6], 1, 3, 4, 4, 5, 6, 7, 6, 24, ), it will return [ 2, 3, 5 ]

  // for (let argItem in args){
  //   console.log(`Checking argItem "${args[argItem]}" ... `)

  //   for (let arrItem in arr) {
  //       console.log(`... against arrItem "${arr[arrItem]}" ...`)

  //       if (args[argItem] == arr[arrItem]){
  //         console.log(`   ... FOUND IT! Target argItem (${args[argItem]}) equals arrItem ("${arr[arrItem]}" at position ${arrItem})`);
  //         let x = arr.splice(arr[arrItem-1], 1);
  //         console.log(`( to be clear, I am removing "${x}" from the list ... hopefully ...`)

          

  //       }
  //   }
  // }

  return arr;

  // // alternate logic; ends up with [1, 4, 6]

  // for (let argItem = (args.length-1); argItem > 0; --argItem ){
  //   console.log(`Checking argItem "${args[argItem]}" ... `)

  //   for (let arrItem = (arr.length-1); arrItem > 0; --arrItem ) {
  //       console.log(`... against arrItem "${arr[arrItem]}" ...`)

  //       if (args[argItem] == arr[arrItem]){
  //         console.log(`   ... FOUND IT! Target argItem (${args[argItem]}) equals arrItem ("${arr[arrItem]}" at position ${arrItem})`);
  //         let x = arr.splice(arr[arrItem-1], 1);
  //         console.log(`( to be clear, I am removing "${x}" from the list ... hopefully ...`)



  //       }
  //   }
  // }


  // arr.splice(arr[item], 1);
  // return arr;


};

console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
