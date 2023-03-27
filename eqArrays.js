const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️‍🔥❤️‍🔥❤️‍🔥 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(a,b) {
  return JSON.stringify(a)===JSON.stringify(b);
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false


// How to comapare two arrays
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/