// Predict and explain first...
// The function always returns 3, because num is a constant and the function doesn't expect any input.
// So, the console.log will print the string correctly, but the number will be always 3 (ignoring the input)

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
