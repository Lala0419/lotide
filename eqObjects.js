const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
	size: "medium",
	color: "red",
	sleeveLength: "long",
};
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
	const obj1Keys = Object.keys(object1);
	const obj2Keys = Object.keys(object2);

	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}

	for (const key of obj1Keys) {
		if (!object2.hasOwnProperty(key)) {
			return false;
		}

		const value1 = object1[key];
		const value2 = object2[key];
		if (value1 === null || value2 === null) {
			if (value1 !== vaue2) {
				return false;
			}
		} else if (Array.isArray(value1) && Array.isArray(value2)) {
			if (!eqArrays(value1, value2)) {
				return false;
			}
		} else if (typeof value1 === "object" && typeof value2 === "object") {
			if (!eqObjects(value1, value2)) {
				return false;
			}
		} else if (value1 !== value2) {
			return false;
		}
	}

	return true;
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
console.log(eqObjects({ a: 1, b: 2 }, { b: 1, a: 1 })); // false
console.log(eqObjects({ a: 1, b: [2, 3] }, { a: 1, b: [2, 4] })); // false
console.log(eqObjects({ a: [1, 2], b: 2 }, { a: [1, 2], b: 3 })); // false
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

module.exports = eqObjects;
