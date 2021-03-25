/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
	let ShortName = 0
	let cntObj = 0;
	let output = {};
	output.numProperties = Object.keys(this).length

	for (let e of Object.keys(this)) {
		if (e.length < 3) {
			ShortName++;
		}
	}
	output.cntShortName = ShortName;

	for (let e of Object.values(this)) {
		if (typeof (e) === "object") {
			cntObj++;
		}
	}
	output.cntReference = cntObj

	return output;
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function () {
		let sum = this.grades[0] + this.grades[1];
		return sum / 2;
	}
}
