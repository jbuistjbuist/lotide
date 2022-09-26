const expect = require("chai").expect;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for two identical 1 level objects with containing only primitive values', () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    const result = eqObjects(ab, ba);
    expect(result).to.be.true;
  });

  it('should return false for two 1 level objects containing different primitive values', () => {
    const ab = {a: "1", b: "1"};
    const ba = {b: "2", a: "1"};
    const result = eqObjects(ab, ba);
    expect(result).to.be.false;
  });

  it('should return true if the objects are identical and contain arrays as values', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const result = eqObjects(cd, dc);
    expect(result).to.be.true;
  });

  it('should return false if the objects contain arrays with differing values', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 4], c: "1" };
    const result = eqObjects(cd, dc);
    expect(result).to.be.false;
  });

  it('should return true if the objects are identical and have nested objects', () => {
    const cd = { a: { z: 1 }, b: 2 };
    const dc = { a: { z: 1 }, b: 2 };
    const result = eqObjects(cd, dc);
    expect(result).to.be.true;
  });

  it('should return false if the objects\' nested objects are different', () => {
    const cd = { a: { z: 1 }, b: 2 };
    const dc = { a: { z: 0 }, b: 2 };
    const result = eqObjects(cd, dc);
    expect(result).to.be.false;
  });
});