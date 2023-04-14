const assertEqual = require("./assertEqual");

const countLetters = function (str) {
	let result = {};
	for (const letter of str) {
		if (letter !== " ") {
			if (result[letter]) {
				result[letter] += 1;
			} else {
				result[letter] = 1;
			}
		}
	}
	return result;
};

const func = countLetters("lighthouse in the house");

assertEqual(func["l"], 1);
assertEqual(func["h"], 4);
assertEqual(func["e"], 3);

module.exports = countLetters;
