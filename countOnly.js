
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (!results[item]) {
        results[item] = 0;
      }
      results[item]++;
    }
  }
  return results;
};

module.exports = countOnly;