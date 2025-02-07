// ? if user give mutiple type value then use union (|)

const inputValue=(value:string | number | boolean):void=>{
    console.log(value);
}

inputValue(55);
inputValue("Ahmed Abbasi");
inputValue(true);

// ! if number double it and if it string convert it in uppercase ;

const userInput=(value:string | number):string | number=>{
    if(typeof  value === "number"){
        return value*2;
    }
    else if(typeof value==="string"){
        return value.toUpperCase();
    }else{
        throw new Error("invalid input data");
    }
}   

console.log(userInput(2));
console.log(userInput("ahmed"))

// ! INTERSECTION

type User={
    name:String;
    age:number
    
}

type Employee={
    _id:number
}

type EmployeeDetails = User & Employee;

const user:EmployeeDetails = {
    name:"Ahmed",
    age:20,
    _id:123
}

console.log(user)