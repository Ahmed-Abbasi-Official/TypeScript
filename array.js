"use strict";
// a)  MAKING ARRAY
const number = [1, 2, 3, 4, 5];
// b) USING ARRAY CONSTRUCTOR
const number1 = new Array(1, 2, 3, 4, 5);
// c) ARRAY OF METHOD
// const names:string[] = Array.of("Ahmed","Abbasi")
// OPERATION : ACCESSING ELEMENTS USING INDEX
console.log(number[2]);
// ! MAP METHOD
// ? 1: DOUNBLING EACH NUMBER  ;
const doubleNumber = number.map((curVal) => curVal * 2);
console.log(doubleNumber);
// ? 2: NUMBER TO STRING    ;
const numberToString = number.map((curVal) => curVal === null || curVal === void 0 ? void 0 : curVal.toString());
console.log(numberToString);
