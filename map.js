// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  let result = JSON.stringify(a)===JSON.stringify(b);
   if (result) {
    console.log(`🔥🔥🔥 Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${a}] !== [${b}]`);
  }
}



const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, cb) {
  const results = [];
  for(let item of array) {
   results.push(cb(item))
  }
  return results
}
const results1 = map(words, word => word[0]);
console.log(results1);

eqArrays(results1, ['g','c','t','m','t'])