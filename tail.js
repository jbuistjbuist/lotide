const tail = function(array) {
  if (!array.length) {
    return [];
  }
  if (array.length === 1) {
    return "no tail, length of array is 1";
  }
  return array.slice(1);
};

module.exports = tail;

