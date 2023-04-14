// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const letterPositions = function (sentence) {
	let results = {};
	// logic to update results here
	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] !== " ") {
			if (results[sentence[i]]) {
				results[sentence[i]].push(i);
			} else {
				results[sentence[i]] = [i]; //creating new key value pair
			}
		}
	}
	console.log("results", results);
	return results;
};

const result = letterPositions("lighthouse in the house");

//test cases that I thought would be
// eqArrays(result['l'],[0])
// eqArrays(result['h'],[3,5,15,18])
// eqArrays(result['e'],[9,16,22])

eqArrays(result.e, [9, 16, 22]);
eqArrays(result.h, [3, 5, 15, 18]);
eqArrays(result.l, [0]);

//gpt
//https://chat.openai.com/chat/5777bc5d-cca1-4151-be14-cc3bb36d30c8

module.exports = letterPositions;
