/**
 *Implement the function findKey which takes in an object and a callback.
 It should scan the object and return the first key for which the callback returns a truthy value.
 If no key is found, then it should return undefined.
 */


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    const item = object[key];
    console.log(item);
    if (callback(item)) {
      return key;
    }
  }
  return undefined;
};

const someObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(someObject, (x) => x.stars === 3), 'Akaleri');


//EXAMPLE
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"