const expect = require("chai").expect;
const letterPositions = require("../letterPositions");

describe('#letterPositions', () => {
  it("should return an object with key value pairs of key: [letter indexes] given a string", () => {
    const result = letterPositions('banana');
    expect(result).to.deep.equal({b: [0], a: [1, 3, 5], n: [2, 4]});
  });

  it("should not include a count of space indexes", () => {
    const result = letterPositions(' ba n a n a ');
    expect(result).to.deep.equal({b: [1], a: [2, 6, 10], n: [4, 8]});
  });
});