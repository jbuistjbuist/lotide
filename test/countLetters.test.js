const _ = require('../index');
const expect = require("chai").expect;

describe("#countLetters", () => {
  it("should return an object {a:2, n:2, b: 1} given the string 'annab'", () => {
    const object = {a:2, n:2, b: 1};
    const result = _.countLetters('annab');
    expect(result).to.deep.equal(object);
  });

  it("should return an object {a:2, n:2, b: 1} given the string 'anna  b   ' (extra spaces)", () => {
    const object = {a:2, n:2, b: 1};
    const result = _.countLetters('anna  b   ');
    expect(result).to.deep.equal(object);
  });
});