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