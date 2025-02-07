// a)  MAKING ARRAY

const number:number[]=[1,2,3,4,5];

// b) USING ARRAY CONSTRUCTOR

const number1:number[]=new Array(1,2,3,4,5)

// c) ARRAY OF METHOD

// const names:string[] = Array.of("Ahmed","Abbasi")

// OPERATION : ACCESSING ELEMENTS USING INDEX

console.log(number[2]);

// ! MAP METHOD

// ? 1: DOUNBLING EACH NUMBER  ;

const doubleNumber:number[] = number.map((curVal:number)=>curVal*2);
console.log(doubleNumber)

// ? 2: NUMBER TO STRING    ;

const numberToString:string[] = number.map((curVal:number)=>curVal?.toString());
console.log(numberToString);