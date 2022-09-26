const takeUntil = require("../takeuntil");
const expect = require("chai").expect;

describe("#takeUntil", () => {
  it("will push elements to a new array until the callback function returns a truthy value for an element", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data1, (x) => x < 0);
    expect(result).to.deep.equal([1, 2, 5, 7, 2]);
  });

  it("will return the the same array as input if the callback does not evaluate to truthy", () => {
    const data = [1, 2, 3, 4];
    const result = takeUntil(data, x => x === 5);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });
});


