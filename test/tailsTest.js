const assert = require("chai").assert;
const tails = require("../tail");

describe("tails", () => {
	it("returns 4", () => {
		assert.deepEqual(tails([1, "hello", "LHL", "Yo Yo"]), 4);
	});
});
