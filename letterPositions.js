const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😩 Assertion Failed: ${actual} !== ${expected}`);
  }
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




const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};




let testerOutput = letterPositions('hel lo');

assertArraysEqual(testerOutput['h'], [0]);
assertArraysEqual(testerOutput['e'], [1]);
assertArraysEqual(testerOutput['l'], [2, 4]);
assertArraysEqual(testerOutput['o'], [5]);
