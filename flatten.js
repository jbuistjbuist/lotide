

const flatten = function(twoLevelArray) {
  let oneLevelArray = [];
  for (let i = 0; i < twoLevelArray.length; i++) {
    if (!Array.isArray(twoLevelArray[i])) {
      oneLevelArray.push(twoLevelArray[i]);
    } else {
      for (let x = 0; x < twoLevelArray[i].length; x++) {
        oneLevelArray.push(twoLevelArray[i][x]);
      }
    }
  }
  return oneLevelArray;
};

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

