const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 1 for [1, 2, 3, 4]", () => {
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });
  it("returns 'one' for [`one`, 2 , 4, 6]", () => {
    assert.strictEqual(head(['one', 2 , 4, 6]), 'one');
  });
});