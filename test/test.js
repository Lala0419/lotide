const chai = require("chai");
const assert = chai.expect;
const eqObjects = require("../eqObjects");

describe("The function eq", () => {
	it("eqObjects({ a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 });", () => {
		assert(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.true;
	});
	it("eqObjects({ a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 });", () => {
		assert(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be
			.false;
	});
	it("eqObjects({ a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 });", () => {
		assert(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be
			.false;
	});
});
