const prompt = require('prompt-sync')();

let num = prompt("Choose a number: ");

if (num % 15 == 0){
    console.log("FizzBuzz");
}
else if (num % 3 == 0){
    console.log("Fizz");
}
else if (num % 5 == 0){
    console.log("Buzz");
}