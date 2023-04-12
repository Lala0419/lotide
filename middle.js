const middle = function (arr) {
	let length = arr.length;
	if (length < 3) {
		return [];
	} else if (length % 2 === 1) {
		return [arr[Math.floor(length / 2)]];
	} else {
		return arr.slice(length / 2 - 1, length / 2 + 1);
	}
};

module.exports = middle;
