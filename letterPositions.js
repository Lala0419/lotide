// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const letterPositions = function (sentence) {
	let results = {};
	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] !== " ") {
			if (results[sentence[i]]) {
				results[sentence[i]].push(i);
			} else {
				results[sentence[i]] = [i];
			}
		}
	}
	return results;
};

const result = letterPositions("lighthouse in the house");

eqArrays(result.e, [9, 16, 22]);
eqArrays(result.h, [3, 5, 15, 18]);
eqArrays(result.l, [0]);

module.exports = letterPositions;
