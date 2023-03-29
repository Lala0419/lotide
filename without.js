// FUNCTION IMPLEMENTATION
const eqArrays = function(a, b) {
  let result = JSON.stringify(a)===JSON.stringify(b);
   if (result) {
    console.log(`🔥🔥🔥 Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${a}] !== [${b}]`);
  }
}

const without = function(source, itemsToRemove) {
  // let removeItems = itemsToRemove.join()
  // console.log('removeItems',removeItems)
source = source.filter(item => !itemsToRemove.includes(item))
 console.log("source",source)
 console.log("remove", itemsToRemove)
   // source.filter(item => item !== itemToRemove) did not work in this case. 
  //** is is because itemsToRemove is an array and has multiple values? */ <-- No
  // A. it is not working because itmesToRemove is an array and you cannot compare with itwm which is a string or number) 

  return source
}

eqArrays(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])// => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);

// remove method (which doesn't exist but found filter and include methods to solve this problem.)
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript