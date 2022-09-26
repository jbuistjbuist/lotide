const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1, 4]), []); // SHOULD RETURN TRUE
assertArraysEqual(middle([1, 2, 3]), [2]); //SHOULD RETURN TRUE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //SHOULD return true