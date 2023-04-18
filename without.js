const eqArrays = require("./eqArrays");

// const without = function (source, itemsToRemove) {
// 	source = source.filter((item) => !itemsToRemove.includes(item));
// 	return source;
// };

const without = function (source, itemsToRemove) {
	let result = [];

	source.map((item) => {
		if (!itemsToRemove.includes(item)) {
			result.push(item);
		}
	});

	return result;
};
eqArrays(without([1, 2, 3], [1]), [2, 3]);
eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
eqArrays(words, ["hello", "world", "lighthouse"]);
