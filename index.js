"use strict";
console.log("I am Ahmed Abbasi");
// FUNCTION DEFINE
//@ts-ignore
function sum(a, b) {
    return a + b;
}
// FUNCTION CALL
//* FUNCTIONS CALL
console.log(sum(5, 10));
let message = "Hello TypeScript!";
// CONCATINATION
let firstName = "Ahmed";
let lastName = "Abbasi";
console.log(firstName + " " + lastName);
// CHECK EVEN NUMBER
const checkEvenNum = (num) => {
    return num % 2 === 0;
};
checkEvenNum(4);
// ANY TYPE
let num = 2;
num = "Ahmed";
