const expect = require("chai").expect;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return the key of the first value for which the callback function returns a truthy value", () => {
    const someObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(someObject, (item) => item.stars === 3);
    expect(result).to.equal('Akaleri');
  });

  it("should return undefined if the callback function does not return a truthy value", () => {
    const someObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(someObject, (item) => item.stars === 6);
    expect(result).to.equal(undefined);
  });
});