
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //part to compare arrays
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    } else if ((typeof object1[key] === 'object') && (typeof object2[key] === 'object')) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;