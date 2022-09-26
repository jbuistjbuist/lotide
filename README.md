# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeremy_b/lotide`

**Require it:**
`const _ = require('@jeremy_b/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Will console log a message indicating whether the provided arrays are a perfect match.
* `assertEqual(actual, expected)`: Given two values (must be primitive values), will print a message to the console indicating whether the actual value matches the expected value.
* `assertObjectsEqual(actual, expected)`: Given two objects, will recursively check the if the objects are identical and log a message to the console.
* `countLetters(string)`: Will return the amount of letters (excluding spaces) in a string of text.
* `countOnly(allItems, itemsToCount)`: Give an array of items, and an array of items to count, will return an object containing the counts for each item specified in the itemsToCount parameter.
* `eqArrays(array1, array2)`: Will return true or false depending on whether the arrays provided are equal to one another (strict equality). 
* `eqObjects(object1, object2)`: Will return true or false depending on whether the objects provided are equal to eachother (strict equality).
* `findKey(object, callback)`: Takes in an object and a callback.
 Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `findKeyByValue(object, value)`: For a given object, will return the first key whose value matches the value provided.
* `flatten(twoLevelArray)`: Will take in a two-dimensional array and flatten it into a one-dimensional array. 
* `head(array)`: Will return the first element in an array. 
* `letterPositions(sentence)`: Will return an object containing the letters as keys, and for each key an array which indicates the indices at which the letters are found in the string.
* `map(array, callback) `: For a given array, will output a new array with the results of calling a provided callback function for each element of the array (does not modify the original array).
* `middle(array)`: Will return the single middle element of an array with an odd number of elements, or the two middle elements if the array has an even number of elements. Will return an empty array given an array with a length less than two.
* `tail(array)`: Will return an array containing all the elements of an array excluding the first element. If the array length is one, it will throw an error.
* `takeUntil(array, callback)`: Will return an array containing the elements of the provided array until the provided callback function returns a truthy value for one of the elements. 
* `without(array, itemsToRemove)`: Given an array of data, and an array of data to remove, will return a new array with the data to remove excluded. 