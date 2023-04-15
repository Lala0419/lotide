const assertEqual = require("./assertEqual");

const findKey = function (ratings, cb) {
	for (const key of Object.keys(ratings)) {
		let star = ratings[key];

		if (cb(star)) {
			return key;
		}
	}
	return undefined;
};

const restaurantRatings = {
	"Blue Hill": { stars: 1 },
	Akaleri: { stars: 3 },
	noma: {
		stars: 2,
	},
	elBulli: { stars: 3 },
	Ora: { stars: 2 },
	Akelarre: { stars: 3 },
};

const result1 = findKey(restaurantRatings, (x) => x.stars === 2);
const result2 = findKey(restaurantRatings, (x) => x.stars === 3); // => "Akaleri"
const result3 = findKey(restaurantRatings, (x) => x.stars === 1); // => "Blue Hill"

assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");
assertEqual(result3, "Blue Hill");

module.exports = findKey;
