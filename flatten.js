const eqArrays = require("./eqArrays");

const flatten = function (arr) {
	return arr.flat(Infinity);
};

eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
