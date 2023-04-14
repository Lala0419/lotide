// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const flatten = function (arr) {
	return arr.flat(Infinity);
};

eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

//how to chack array is an array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

//how to flatten a nested array in JS
// https://dev.to/emmaadesile/how-to-flaten-a-nested-array-4pa2

module.exports = flatten;
