// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💤💤💤 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(a,b) {
  return JSON.stringify(a)===JSON.stringify(b);
  
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

const eqObjects = function(object1, object2) {
    if(Object.keys(object1).length  === Object.keys(object2).length) {
      for(let key of Object.keys(object1)) {
        if(Array.isArray(object1[key]) || Array.isArray(object2[key])) {
          eqArrays(object1[key], object2[key])
        }
          if(object1[key] === object2[key]) {
            return true
          }
          return false
          }
        
  }

 return false
};
 eqObjects(shirtObject , anotherShirtObject); // => true

// TEST CODE
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

//?? Not handring the array well. so the line 42, 43 is false and undefined/