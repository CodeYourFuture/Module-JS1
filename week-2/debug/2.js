// Predict and explain first...

const num = 109;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Is not working properly because the function is taking the cosntant value fron the variable num = 109
// so after run the function is returning the last value from the variable num = 109, if we want to this
// program works properly we need to eliminate the cont num = 109 and add a parameter to the function
// getLastDigit(num)
