const tail = function (arr) {
	const result = arr.slice(1);

	return result;
};

tail(["ggg", "ppp", "2", 1]);

module.exports = tail;
