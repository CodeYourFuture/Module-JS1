// Predict and explain first...

// const num = 103;

// function getLastDigit() {
//  return num.toString().slice(-1); }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//...........................................................................
// first the (num) is not defined, second the (const num = 103;) is a fixed number and that is what it will 
//          calculate for all numbers, their  last digit will remain 3, we can fix this by using
//          the  following code:

function getLastDigit(num) {
  return num.toString().slice(-1); }

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

