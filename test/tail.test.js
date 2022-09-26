const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("should return ['two', 'three', 'four'] for ['one', two', 'three', 'four']", () => {
    assert.deepEqual(tail(['one', 'two', 'three', 'four']), ['two', 'three', 'four']);
  });
  it("should return an empty array given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
