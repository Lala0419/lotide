const eqArrays = function (a, b) {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i < a.length; i++) {
		if (Array.isArray(a[i]) && Array.isArray(b[i])) {
			const isEqual = eqArrays(a[i], b[i]);
			if (!isEqual) {
				return false;
			}
		} else {
			return JSON.stringify(a) === JSON.stringify(b);
		}
	}
	return true;
};

// How to comapare two arrays
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/

module.exports = eqArrays;
