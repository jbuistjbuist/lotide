const {assertArraysEqual} = require("../assertArraysEqual");

assertArraysEqual([1, 3 , 4], [1, 3, 4]);
assertArraysEqual([1 , 3 ,4], [2, 3, 4]);
assertArraysEqual([1,2], [1, 2, 3]);