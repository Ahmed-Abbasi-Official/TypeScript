// ? if user give mutiple type value then use union (|)
var inputValue = function (value) {
    console.log(value);
};
inputValue(55);
inputValue("Ahmed Abbasi");
inputValue(true);
// ! if number double it and if it string convert it in uppercase ;
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("invalid input data");
    }
};
console.log(userInput(2));
console.log(userInput("ahmed"));
var user = {
    name: "Ahmed",
    age: 20,
    _id: 123
};
console.log(user);
