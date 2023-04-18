const assert = require("chai").assert;
const tail = require("../tail");

describe("tail", () => {
	it("returns 4", () => {
		assert.deepEqual(tail([1, "hello", "LHL", "Yo Yo"]), [
			"hello",
			"LHL",
			"Yo Yo",
		]);
	});
});
