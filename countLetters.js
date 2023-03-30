// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(str) {
  let result = {};
    for(let letter of str) {
      if(letter !== ' ') {
        if(result[letter]) {
          result[letter] += 1;
        }else {
          result[letter] = 1
        }
      }
    }
    console.log('result', result)
  return result;
}

const func = countLetters("lighthouse in the house");


// TEST CODE
assertEqual(func['l'], 1);
assertEqual(func['h'], 4);
assertEqual(func['e'], 3);



