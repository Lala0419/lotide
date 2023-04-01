// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function(obj, cb) {
  // let result = []
  for(let key of Object.keys(obj)) {
    // result.push(obj[key][stars])
    // console.log('Object.keys(obj)', Object.keys(obj))
    if(cb(obj[key])){
      return key
    }
  } 
  return undefined
}

//from chatGPT
// function findKey(obj, callback) {
//   for (let key in obj) {
//     console.log('obj[key]',obj[key])
//     if (callback(obj[key])){ //true 
//     /**  callback({stars: 1}){
//         x => x.stars === 2
//      x => {stars: 1}.stars
//      } --> guessing^^ but Doesn't make sence..?
//     */
//       console.log('callback(obj[key])',callback(obj[key])) //true/false but how?? 
//       return key;
//     }
//   }
//   return undefined;
// }


const restaurantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// const test = function(){
//   return [ 'Blue Hill', 'Akaleri', 'noma', 'elBulli', 'Ora', 'Akelarre' ].find(x => x.stars === 2)
//***  ^^ NO it is actually {stars: 1},{stars: 3},{stars: 2},{stars: 3},{stars: 2} or {stars: 3} */

// console.log(test)

const result1 = findKey(restaurantRatings, x => x.stars === 2) // => "noma"


const result2 = findKey(restaurantRatings, x => x.stars === 3) // => "Akaleri"

const result3 = findKey(restaurantRatings, x => x.stars === 1) // => "Blue Hill"




// TEST CODE
assertEqual(result1, 'noma');
assertEqual(result2, 'Akaleri');
assertEqual(result3, 'Blue Hill');


/**
 * wow wow wow it took me almost 5 hours.. 
 * these are some phrase from chatGPT that helped me understand the concept of 
 * the callback `x => x.stars === 2`
 * 
 * Q, what is x in here?
    A, The x in the callback function represents the current value being processed by the findKey function. In the case of the example provided, x represents the value of the stars property of the current object being processed.

* Q, still dont get it
    The expression x.stars === 2 checks whether the stars property of the object passed as an argument to the callback function has a value of 2. If the value of the stars property is equal to 2, then the expression evaluates to true, which is a truthy value. If the value of the stars property is not equal to 2, then the expression evaluates to false, which is a falsy value.
 *
    link for more detail
    https://chat.openai.com/chat/b257c91e-c590-4c53-a560-3cabb6f5a141
 */