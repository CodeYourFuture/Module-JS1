// Predict and explain first...

const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The code initialises a constant, num, with the value 103 and introduces a function named getLastDigit aimed at extracting and returning the last digit of a given number.
// The function doesn't work as intended because it consistently references the constant num instead of utilising the numbers provided as arguments.
// Consequently, the console.log statements, which invoke the function without passing the given argument values (42, 105, and 806), consistently display the last digit of the fixed constant value, 103.
// To fix this issue, the function should be adjusted to accept a parameter representing the number, allowing it to accurately extract and return the last digit of each provided number when invoked in the console.log statements.
