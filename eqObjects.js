//COME BACK WHEN YOU HAVE MORE TIME

// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
};
const longSleeveMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
	sleeveLength: "long",
};

const eqObjects = function (object1, object2) {
	if (Object.keys(object1).length !== Object.keys(object2).length) {
		return false;
	}
	for (let key of Object.keys(object1)) {
		// console.log('key',key)
		if (object2.hasOwnProperty(key) === false) {
			//checking if they have the same key
			return false;
		} else {
			// object1[key] === colors: ["red", "blue"]
			if (Array.isArray(object1[key])) {
				// chacking the key' value is an array or not
				const theseArrIsEqual = eqArrays(object1[key], object2[key]); //checking the key's value
				if (theseArrIsEqual === false) {
					return false;
				}
			} else if (object1[key] !== object2[key]) {
				//key value is not an array so just checking the imprimitive value
				return false;
			}
			// if(Array.isArray(object1[key]) || Array.isArray(object2[key])) {
			//   eqArrays(object1[key], object2[key])
			// }
		}
		return true; //whenever you are kicked out from the condition, you come here.
	}
};

//  eqObjects(shirtObject , anotherShirtObject); // => true
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
// TEST CODE
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(
	eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
	true
); // => true
assertEqual(
	eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
	false
); // => false

//?? Not handring the array well. so the line 42, 43 is false and undefined/

module.exports = eqObjects; // just exporting one thing
//module.export = { eqObjects };
