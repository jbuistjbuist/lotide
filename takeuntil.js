// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     console.log('✋ Assertion Failed: Arrays are not the same length!');
//     return;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       console.log(`✋ Assertion Failed: Discrepancy found at index ${i}`);
//       return;
//     }
//   }
//   console.log('✌️ Assertion Passed: The arrays are identical!');
//   return;
// };




const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const numbers = [1, 3, 5, 6, 8, 10];

// assertArraysEqual(takeUntil(numbers, (number) => number % 2 === 0), [1, 3, 5]);
// assertArraysEqual(takeUntil(numbers, (number) => number * 5 === 50), [1, 3, 5, 6, 8]);
