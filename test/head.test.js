const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([1 , 2 , 4, 6]), 1);
assertEqual(head([`one`, 2 , 4, 6]), 'one');