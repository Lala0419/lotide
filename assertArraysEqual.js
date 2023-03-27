// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  let result = JSON.stringify(a)===JSON.stringify(b);
   if (result) {
    console.log(`🔥🔥🔥 Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${a}] !== [${b}]`);
  }
}

eqArrays([1,2,3],[1,2,3])
eqArrays([1,5,3],[1,2,3])
eqArrays([1,"2",3],[1,2,3])