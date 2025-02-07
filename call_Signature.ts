// * CALL SIGNATURE

// ? if you define a function inside a object call method but if you define its type then called Call Signature ;

type Student={
    name:string;
    age:number;
    gender?:string;
    greet:(country:string)=>string; // SIGNATURE CALL   ;
}

const student1:Student={
    name:"Ahmed Abbasi",
    age:21,
    greet:(country) =>{
        return `Welcome! My name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
    }
}

const introduction =(student1:Student):string=>{
    const {name,age}=student1;
    return `Welcome! My name is ${name}, I am ${age} yrs old.`
}

console.log(introduction(student1));
console.log(student1.greet("Pakistan"));