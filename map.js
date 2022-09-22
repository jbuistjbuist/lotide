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




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

const numbers = [1, 2, 3, 4];

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word + 'oops!'), ["groundoops!", "controloops!", "tooops!", "majoroops!", "tomoops!"]);
assertArraysEqual(map(numbers, (number) => number * 2), [2, 4, 6, 8]);