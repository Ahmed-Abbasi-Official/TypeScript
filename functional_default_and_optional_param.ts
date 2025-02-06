// SIMPLE FUNCTON

function greet(name:string,num:number){
    return `Welcome! ${name} you score is ${num}`
}

console.log(greet("Ahmed",2));

// DEFAULT PARAM

function greet2(name:string,num:number=1):string{
    return `Welcome! ${name} you score is ${num}`
}

console.log(greet2("Abbasi"));

// OPTIONAL PARAM (use ?)

function greet3 (name:string,num?:number):string{
    return `Welcome! ${name}`
}

console.log(greet3("Abbasi"))

