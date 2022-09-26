// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🙏🏻 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😩 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //part to compare arrays
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    } else if ((typeof object1[key] === 'object') && (typeof object2[key] === 'object')) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


// TEST CODE
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};

// assertEqual(eqObjects(ab, ba), true); //true

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 4] };

// assertEqual(eqObjects(cd, cd2), false); // => false


// //TEST CODE FOR RECURSIVE

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false