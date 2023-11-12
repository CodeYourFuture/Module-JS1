const num = 56.5467;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

const wholeNumberPart = Math.floor(num); // Extract the whole number part 56
const decimalPart = num - wholeNumberPart; // Calculate the decimal part; num is 56.5467 - wholeNum is 56 so 0,5467 is decimal
const roundedNum = Math.round(num); // Round to the nearest whole number is 56,5 and will be 57

console.log("Whole Number Part:", wholeNumberPart);
console.log("Decimal Part:", decimalPart);
console.log("Rounded Number:", roundedNum);

/* a) The Math.floor function is used to round down a decimal number to the nearest integer that is less than or equal to the original number.
If Math.floor(-8.4), the result will be -9. This is because -9 is the closest integer that is less than or equal to -8.4. The function essentially rounds down to the nearest whole number.*/

/* b) If Math.floor(8.4), the result will be 8. The Math.floor function rounds down the given decimal number to the nearest integer that is less than or equal to the original number. In this case, 8 is the closest integer that satisfies this condition for the decimal 8.4. */
