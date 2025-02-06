// a)  MAKING ARRAY
var number = [1, 2, 3, 4, 5];
// b) USING ARRAY CONSTRUCTOR
var number1 = new Array(1, 2, 3, 4, 5);
// c) ARRAY OF METHOD
// const names:string[] = Array.of("Ahmed","Abbasi")
// OPERATION : ACCESSING ELEMENTS USING INDEX
console.log(number[2]);
// ! MAP METHOD
// ? 1: DOUNBLING EACH NUMBER  ;
var doubleNumber = number.map(function (curVal) { return curVal * 2; });
console.log(doubleNumber);
// ? 2: NUMBER TO STRING    ;
var numberToString = number.map(function (curVal) { return curVal === null || curVal === void 0 ? void 0 : curVal.toString(); });
console.log(numberToString);
