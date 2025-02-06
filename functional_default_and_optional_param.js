// SIMPLE FUNCTON
function greet(name, num) {
    return "Welcome! ".concat(name, " you score is ").concat(num);
}
console.log(greet("Ahmed", 2));
// DEFAULT PARAM
function greet2(name, num) {
    if (num === void 0) { num = 1; }
    return "Welcome! ".concat(name, " you score is ").concat(num);
}
console.log(greet2("Abbasi"));
// OPTIONAL PARAM (use ?)
function greet3(name, num) {
    return "Welcome! ".concat(name);
}
console.log(greet3("Abbasi"));
