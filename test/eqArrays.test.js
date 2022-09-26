const expect = require("chai").expect;
const eqArrays = require("../eqArrays");


describe("#eqArrays", () => {
  it("should return false given two arrays of different lengths", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3, 4]);
    expect(result).to.be.false;
  });

  it("should return false given two arrays of same length and different values", () => {
    const result = eqArrays([1, 2, 3], [1, 1, 3]);
    expect(result).to.be.false;
  });

  it("should return true given two identical arrays", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    expect(result).to.be.true;
  });

});