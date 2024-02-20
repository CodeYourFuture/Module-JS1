// Predict and explain first...

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem - because num is defined at the top outside of the function so when computer gets to function it will read the num value that is already defined above. to avoid that, delete num at the top and include it in the function in the brackets getLastDigit
