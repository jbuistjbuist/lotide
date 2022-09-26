const expect = require("chai").expect;
const flatten = require("../flatten");

describe('#flatten', () => {
  it("should return a one dimensional array as-is", () => {
    const array = [1, 2, 3, 4, 5];
    const result = flatten(array);
    expect(array).to.deep.equal(result);
  });

  it("should flatten a two dimensional array", () => {
    const array = [1, 2, [3, 4], 5];
    const result = flatten(array);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});




