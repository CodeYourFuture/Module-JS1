// Predict and explain first..
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
const num = 103;

function getLastDigit(num) {
  return num % 10;
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
