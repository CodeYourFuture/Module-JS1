// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(inputValue, conversionFactor) {
  // Convert inputValue to pounds using the provided conversionFactor
  const resultInPounds = inputValue * conversionFactor;
  
  return resultInPounds;
}

// Example usage:
const input1 = 10; // Input value to be converted
const conversionFactor1 = 2.20462; // Conversion factor for the specific conversion

const result1 = toPounds(input1, conversionFactor1);
console.log(`${input1} kilograms is ${result1} pounds`);

const input2 = 20; // Another input value to be converted
const conversionFactor2 = 2.20462; // Conversion factor for this conversion

const result2 = toPounds(input2, conversionFactor2);
console.log(`${input2} kilograms is ${result2} pounds`);