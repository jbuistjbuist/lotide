const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log('✋ Assertion Failed: Arrays are not the same length!');
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`✋ Assertion Failed: Discrepancy found at index ${i}`);
      return;
    }
  }
  console.log('✌️ Assertion Passed: The arrays are identical!');
  return;
};

const middle = function(array) {
  let middleElements = [];
  let midIndexPlusOne = array.length / 2;

  if (array.length <= 2) {
    return middleElements;
  }

  if (array.length % 2 === 0) {
    middleElements.push(array.slice(midIndexPlusOne - 1, midIndexPlusOne + 1));
    return middleElements.flat();
  }

  middleElements.push(array.slice(Math.floor(midIndexPlusOne), Math.floor(midIndexPlusOne + 1)));
  return middleElements.flat();
};

//TEST CODE

console.log(middle([1, 4])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 4]), []); // SHOULD RETURN TRUE
assertArraysEqual(middle([1, 2, 3]), [2]); //SHOULD RETURN TRUE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //SHOULD return true