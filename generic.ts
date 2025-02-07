function greet<T>(value:T):T {
    return value;
}

console.log(greet<number>(2));