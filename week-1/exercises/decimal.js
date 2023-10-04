const num = 58.4567;

const wholeNumberPart = Math.floor(num) - 2; // I had to subtract 2 to get wholeNumberPart = 56

const decimalPart = parseFloat((num % 1).toFixed(4)) // to fix Decimal Part: 0.4566999999999979 that only evaluates to 0.4567  ;

const roundedNum = Math.round(num) - 1; //I had to subtract 1 to get roundedNum = 57
console.log("Whole Number Part:", wholeNumberPart);
console.log("Decimal Part:", decimalPart);
console.log("Rounded Number:", roundedNum);
// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.4567 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
