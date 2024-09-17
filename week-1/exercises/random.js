const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// console.log(num);

// In this exercise, you will need to work out what num represents?
//Represent a whole random number.

// Try breaking down the expression and using documentation to explain what it means
let randomNumber = Math.random();
console.log(randomNumber);

const multiplied = maximum - minimum + 1;
console.log(multiplied);

let randomNumberMultiplied = randomNumber * multiplied;
console.log(randomNumberMultiplied);

let wholeRandomNumberMultiplied = Math.floor(randomNumberMultiplied);
console.log(wholeRandomNumberMultiplied);

let num1 = wholeRandomNumberMultiplied + minimum;
console.log(num1);

// It will help to think about the order in which expressions are evaluated
//The first we need is the random number which become from 0 to 1, then we have to multiply by 100,
//after that we need to rounded to a whole number and finally we add 1 more to be in the range 1-100.

// Try logging the value of num several times to build an idea of what the program is doing
//The program is given a random number from 1 to 100.
