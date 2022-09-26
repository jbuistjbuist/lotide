const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", ()=> {
  it("should return empty array when given an array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return one middle element of an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return two middle elements if the array has an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});