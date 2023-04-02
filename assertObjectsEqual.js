const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`🔥🔥🔥 Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`💤💤💤 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

const eqArrays = function (a, b) {
	return JSON.stringify(a) === JSON.stringify(b);
};

const eqObjects = function (object1, object2) {
	if (Object.keys(object1).length !== Object.keys(object2).length) {
		return false;
	}
	for (let key of Object.keys(object1)) {
		if (object2.hasOwnProperty(key) === false) {
			//checking if they have the same key
			return false;
		} else {
			// object1[key] === colors: ["red", "blue"]
			if (Array.isArray(object1[key])) {
				// chacking the key' value is an array or not
				const theseArrIsEqual = eqArrays(object1[key], object2[key]); //checking what the key's value are
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
	const inspect = require("util").inspect;
};
