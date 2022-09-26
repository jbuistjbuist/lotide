// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🙏🏻 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😩 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(string) {
  let noSpaces = string.split(" ").join('');
  let outputCount = {};
  for (let letter of noSpaces) {
    if (!outputCount[letter]) {
      outputCount[letter] = 0;
    }
    outputCount[letter]++;
  }
  console.log(outputCount);
  return outputCount;
};

module.exports = countLetters;

// //TEST CODE

// const answer = countLetters("annab");

// assertEqual(answer.a, 2);
// assertEqual(answer.n, 2);
// assertEqual(answer.b, 1);