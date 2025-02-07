"use strict";
// ! TYPE ALIAS
var _a;
// * DECLARE AS A OBJECT
const person = {
    name: "Ahmed Abbasi",
    age: 27,
    isStudent: true,
    address: {
        city: "karachi",
        country: "pakistan"
    }
};
const person1 = {
    name: "Ahmed Abbasi",
    age: 27,
    isStudent: true,
    address: {
        city: "karachi",
        country: "pakistan"
    }
};
// ! TODO ACCESSING THE OBJECT DATA 
console.log((_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.country);
