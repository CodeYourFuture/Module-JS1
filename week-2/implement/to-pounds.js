// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs

const test1 = "5p";
const test2 = "79p";
const test3 = "962p";
const test4 = "5672p";
const test5 = "87235p";
const test6 = "598161p";

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  const formattedPence = `£${pounds}.${pence}`;

  return formattedPence;
}

console.log(toPounds(test1));
console.log(toPounds(test2));
console.log(toPounds(test3));
console.log(toPounds(test4));
console.log(toPounds(test5));
console.log(toPounds(test6));
