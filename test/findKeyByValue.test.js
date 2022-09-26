const findKeyByValue = require("../findKeyByValue");
const expect = require("chai").expect;

describe('#findKeyByValue', () => {
  it("should return the first object key that matches the provided value", () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      bumblebee: "yellowblack"
    };
    const result = findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine');
    expect(result).to.equal("comedy");
  });

  it("should return undefined if no match is found", () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      bumblebee: "yellowblack"
    };
    const result = findKeyByValue(bestTVShowsByGenre, 'Silly Show');
    expect(result).to.be.undefined;
  });
});