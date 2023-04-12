const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);
assertArraysEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
