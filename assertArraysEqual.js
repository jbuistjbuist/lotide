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



