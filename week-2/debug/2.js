// Predict and explain first...

// const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.

// Explain why getLastDigit is not working properly - correct the problem
// It is not working properly because the variable "num" is defined globally instead of locally within the function.
// As such, the function takes the global value of the num and pass it to the function each time the function is called.
// To fix the problem, do not define the variable outside, rather use the variable name as a parameter in the variable,
// so argument passed to the function like the parameter in the function definition.
