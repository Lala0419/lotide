// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, cb) {
	const results = [];
	for (const item of array) {
		results.push(cb(item));
	}
	return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

eqArrays(results1, ["g", "c", "t", "m", "t"]);

module.exports = map;
