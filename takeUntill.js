const eqArrays = require("./eqArrays");

const takeUntil = function (array, callback) {
	let result = [];
	for (const item of array) {
		result.push(item);
		if (result.find(callback)) {
			result.splice(-1, 1);
			return result;
		}
	}
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

console.log("---");

const data2 = [
	"I've",
	"been",
	"to",
	"Hollywood",
	",",
	"I've",
	"been",
	"to",
	"Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");

eqArrays(results2, ["I've", "been", "to", "Hollywood"]);
eqArrays(results1, [1, 2, 5, 7, 2]);

module.exports = takeUntil;
