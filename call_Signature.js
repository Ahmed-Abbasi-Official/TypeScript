// * CALL SIGNATURE
var student1 = {
    name: "Ahmed Abbasi",
    age: 20
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome! My name is ".concat(name, ", I am ").concat(age, "yrs old.");
};
console.log(introduction(student1));
