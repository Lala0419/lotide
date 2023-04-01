// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  let result = JSON.stringify(a)===JSON.stringify(b);
   if (result) {
    console.log(`🔥🔥🔥 Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${a}] !== [${b}]`);
  }
}


const takeUntil = function(array, callback) {
  let result = []
  for(let item of array) {
    result.push(item)
   // console.log('result', result)
    if(result.find(callback)){
      result.splice(-1, 1)
     // console.log('resultc', result)
      return result
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log('result1',results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log('result2',results2);

eqArrays(results2, [ "I've", 'been', 'to', 'Hollywood' ])
eqArrays(results1, [ 1, 2, 5, 7, 2 ])

//splice resource
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice