// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs

function toPounds(str) {
  const num = str.slice(0, -1).padStart(3, "0");
  const pounds = num.slice(0, -2);
  const pence = num.slice(-2);
  return `£${pounds}.${pence}`;
}

//Test cases
console.log(toPounds("399p")); // Output: £3.99
console.log(toPounds("5p")); // Output: £0.05
console.log(toPounds("1094p")); // Output: £10.24
console.log${pounds("1094p")}; // Output: £10.24 *

/* The toPounds function:
Takes a string str representing an amount in pence.
Removes the 'p' from the end of the string and ensures it has at least three digits by adding leading zeros if necessary.
Separates the first part as pounds and the last two digits as pence.
Formats these values into the £X.YY (pounds and pence) format.
Returns the result.
The console.log statements demonstrate how the function converts different pence values into pounds and pence (£X.YY). Adjust the inputs to test other amounts! */
