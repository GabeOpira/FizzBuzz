"use strict";

// check each number from 1 through 20
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");   // divisible by 3 and 5
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");       // divisible by 3 only
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");       // divisible by 5 only
    } else {
        console.log(i);                 // divisible by neither
    }
}