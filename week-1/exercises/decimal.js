
const num = 56.5467;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign the whole number part of num to it
const wholeNumberPart = Math.floor(num);

// Create a variable called decimalPart and assign the decimal part of num to it
const decimalPart = num - wholeNumberPart;

// Create a variable called roundedNum and assign num rounded to the nearest whole number to it
const roundedNum = Math.round(num);

console.log("Whole Number Part:", wholeNumberPart);
console.log("Decimal Part:", decimalPart);
console.log("Rounded Number:", roundedNum);

