// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  let result = JSON.stringify(a)===JSON.stringify(b);
   if (result) {
    console.log(`🔥🔥🔥 Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${a}] !== [${b}]`);
  }
}

const middle = function(arr) {
  let length = arr.length;
  if (length < 3) {
    return [];
  } else if (length % 2 === 1) {
    return [arr[Math.floor(length / 2)]];
  } else {
    return arr.slice(length / 2 - 1, length / 2 + 1);
  }
}

eqArrays(middle([1,2,3]), [2])
eqArrays(middle([1,2,3,4,5]), [3])
eqArrays(middle([1,2,3,4,5,6]), [3,4])
