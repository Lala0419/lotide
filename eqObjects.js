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
	for (const key of Object.keys(object1)) {
		if (object2.hasOwnProperty(key) === false) {
			return false;
		} else {
			if (Array.isArray(object1[key])) {
				// chacking the key' value is an array or not
				const theseArrIsEqual = eqArrays(object1[key], object2[key]);
				//checking the key's value
				if (theseArrIsEqual === false) {
					return false;
				}
			} else if (
				typeof object1[key] === "object" &&
				typeof object2[key] === "object"
			) {
				return eqObjects(object1[key], object2[key]);
			} else if (object1[key] !== object2[key]) {
				//key value is not an array so just checking if it is an imprimitive value
				return false;
			}
		}
		return true;
		//whenever you are kicked out from the condition, you come here.
	}
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(
	eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
	true
);
assertEqual(
	eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
	false
);

module.exports = eqObjects;
