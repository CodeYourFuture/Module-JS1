
const num = 56.5467;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
var wholeNumberPart = Math.trunc(num);
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
var decimalPart = num - wholeNumberPart;
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
var roundedNum = Math.round(num);
// Log your variables to the console to check your answers

console.log(wholeNumberPart);
console.log(decimalPart.toFixed(4));
console.log(roundedNum);
