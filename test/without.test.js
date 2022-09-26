const expect = require("chai").expect;
const without = require("../without");

describe("#without", () => {
  it("should filter out the items in the items to exclude array, returning a modified array", () => {
    const array = [1, 2, 'potato', 3];
    const result = without(array, ['potato', 2]);
    expect(result).to.deep.equal([1, 3]);
  });

  it("should return the same array if no valid values are provided", () => {
    const array = [1, 2, 'potato', 3];
    const result = without(array, ['chicken legs']);
    expect(result).to.deep.equal([1, 2, 'potato', 3]);
  });
});
