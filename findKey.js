
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    const item = object[key];
    console.log(item);
    if (callback(item)) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;