// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
The getLastDigit function is not working properly because it is trying to convert a number to a string using the toString() method. However, the toString() method does not exist for numbers in JavaScript.

To fix this issue, we can use the String() function instead. This function can convert a number to a string.

function getLastDigit(num) {
  return String(num).slice(-1);
 }
 
 console.log(`The last digit of 42 is ${getLastDigit(42)}`);
 console.log(`The last digit of 105 is ${getLastDigit(105)}`);
 console.log(`The last digit of 806 is ${getLastDigit(806)}`);