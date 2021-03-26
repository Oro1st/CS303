/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(str) {
	if (str === "") {
		return "";
	}
	if (str === undefined) {
		return "missing argument";
	}
	if (!isNaN(str)) {
		return "argument not string";
	}
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (i % 2 !== 0) {
			result = result.concat(str[i]);
		}
	}
	return result;
}

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			sum += array[i];
		}

	}
	return sum;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(arr[i] || arr[i] > 0)) {
			continue;
		}
		if (arr[i] < 0) {
			arr[i] *= -1;
		}
	}
	return arr;
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(arr) {
	let result = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			if (result.length === 0) {
				result[j++] = '*';
			}
			else if (result[j - 1] !== '*') {
				result[j++] = '*';
			}
		} else {
			result[j++] = arr[i];
		}

	}

	return result;
}


