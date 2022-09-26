const {assertArraysEqual, tail} = require('../tail');

assertArraysEqual(tail([1,3,4]), [3, 4]);
assertArraysEqual(tail(["one","three","four"]), ["three", "four"]);
