"use strict";
// * CALL SIGNATURE
const student1 = {
    name: "Ahmed Abbasi",
    age: 21,
    greet: (country) => {
        return `Welcome! My name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
    }
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome! My name is ${name}, I am ${age} yrs old.`;
};
console.log(introduction(student1));
console.log(student1.greet("Pakistan"));
