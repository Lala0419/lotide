const assertEqual = require("./assertEqual");

// TEST CODE
const bestTVShowsByGenre = {
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama: "The Wire",
};

const findKeyByValue = function (obj, value) {
	for (const key of Object.keys(obj)) {
		if (obj[key] === value) {
			return key;
		}
	}
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
