const expect = require("chai").expect;
const map = require("../map");

describe("#map", () => {
  it("should apply a callback function to each element in an array of strings", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = (map(words, word => word[0]));
    expect(result).to.deep.equal([ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should apply a callback function to each element in an array of numbers", () => {
    const numbers = [1, 2, 3, 4];
    const result = (map(numbers, (number) => number * 2));
    expect(result).to.deep.equal([2, 4, 6, 8 ]);
  });
});