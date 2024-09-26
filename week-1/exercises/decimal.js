
const num = 56.5467;
const wholeNumberPart = Math.trunc(num);
console.log(wholeNumberPart );

const decimalPart = (num - Math.floor(num)).toFixed(4);   // if we console.log the decimalPart = Math.floor(num);  output : 56, we subtract original number with result.
console.log(decimalPart);

const roundedNum = Math.round(num);
console.log(roundedNum);
// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
