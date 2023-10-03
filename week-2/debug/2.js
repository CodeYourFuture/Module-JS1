// Predict and explain first...
// If you would like a function that returns any number you input,
// Then a variable should not be stored. Rather the function should,
// Contain parameter/s that then can be used as lets say "storage",
// To give some sort of output towards our function.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
console.log(`The last digit of 103 is ${getLastDigit(103)} `);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
