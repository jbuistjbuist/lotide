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

module.exports = middle;