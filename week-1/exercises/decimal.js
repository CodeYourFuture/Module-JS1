const num = 58.4567;
const wholeNumberPart = Math.round(num);
const decimalPart = (num - wholeNumberPart).toFixed(4);
const roundedNum = wholeNumberPart-1;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 58 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.4567 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
console.log(num);
console.log(wholeNumberPart);
console.log(decimalPart);
console.log(roundedNum);