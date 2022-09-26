
const without = function(array, itemsToRemove) {

  return array.filter((item) => !itemsToRemove.includes(item));
};

module.exports = without;

