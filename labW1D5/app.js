/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
    if (s.length == 0 || target.length === 0) {
        return 0;
    }
    let len = target.length;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let ss = s.substr(i, len);
        if (target === ss) {
            count++;
        }
    }

    return count;

    // s += "";
    // target += "";

    // if (target.length <= 0) {
    //     return (s.length + 1);
    // }

    // var count = 0, pos = 0, step = target.length;

    // while (true) {
    //     pos = s.indexOf(target, pos);
    //     if (pos >= 0) {
    //         ++count;
    //         pos += step;
    //     } else {
    //         break;
    //     }
    // }
    // return count;

}

// Save obj in localStorage
function saveInLocalStorage(name, obj) {
    const jsonObj = JSON.stringify(obj);
    localStorage.setItem(name, jsonObj);

}

// Return value of name in local storage
function getFromLocalStorage(name) {
    const str = localStorage.getItem(name);
    const parsedObj = JSON.parse(str);
    return parsedObj;

}



// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
    for (let k in obj) {
        if (!this.hasOwnProperty(k)) {
            let x = obj[k];
            this[k] = x;
        }

    }
}

// Constructor function which creates object {name:name, country:country, creationDate:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
    let obj = { name: name, country: country, creationDate: new Date() };
    return obj;
}


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    let map = new Map();
    for (let i = 0; i < students.length; i++) {
        map.set(students[i], 0);
    }
    return map;
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
    let absence = course.get(student);
    course.set(student, absence + 1);
}


