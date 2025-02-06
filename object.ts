
// ! TYPE ALIAS

type Person={
    name:string;
    age:number;
    isStudent:boolean,
    address:{city:string;country:string};
}


// * DECLARE AS A OBJECT

const person:{
    name:string,
    age:number,
    isStudent:boolean,
    address:{city:string,country:string}
} = {
    name:"Ahmed Abbasi",
    age:27,
    isStudent:true,
    address:{
        city:"karachi",
        country:"pakistan"
    }
}
const person1:Person = {
    name:"Ahmed Abbasi",
    age:27,
    isStudent:true,
    address:{
        city:"karachi",
        country:"pakistan"
    }
}

// ! TODO ACCESSING THE OBJECT DATA 

console.log(person?.address?.country);