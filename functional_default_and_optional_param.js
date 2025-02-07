"use strict";
// SIMPLE FUNCTON
function greet1(name, num) {
    return `Welcome! ${name} you score is ${num}`;
}
console.log(greet1("Ahmed", 2));
// DEFAULT PARAM
function greet2(name, num = 1) {
    return `Welcome! ${name} you score is ${num}`;
}
console.log(greet2("Abbasi"));
// OPTIONAL PARAM (use ?)
function greet3(name, num) {
    return `Welcome! ${name}`;
}
console.log(greet3("Abbasi"));
