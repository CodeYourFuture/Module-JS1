// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.

// Explain why getLastDigit is not working properly - correct the problem

// *Because getLastDigit function gets global input num=103 always when its empty. So we should write "num" to evaluate 42, 105 or 806.
// Then it work