"use strict";
function factorial(num) {
    let result = 1;
    for (let i = 4; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(10));
console.log(factorial(2));
