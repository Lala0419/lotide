// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
	const results = {};

	for (const item of allItems) {
		console.log("ITC", itemsToCount[item]);
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	console.log("results", results);
	return results;
};

const firstNames = [
	"Karl",
	"Salima",
	"Agouhanna",
	"Fang",
	"Kavith",
	"Jason",
	"Salima",
	"Fang",
	"Joe",
];

const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
	Agouhanna: false,
});

// cosnt result1 = results

assertEqual(result1["Jason"], 1); //result1[1],1 とsame things?
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//*** Had help from three mentors!! finally was able to understood! data type, how to manipulate object, get value from object are the keys! */

module.exports = countOnly;
