// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // convert to 100 place values (in case it's less than 100s)
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// ); // extract the pound portion, that is, the digit(s) before the last 2 digits in any given value. Even if less than 100p, the padded 0's at the start (from the previous code line) takes care of it

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0"); //the substring ensures the last 2 digits are extracted out from a given value. ".padEnd" ensures there are exactly digits. If less than 2, 0 is introduced at the end to get up to 2 digits.

// console.log(`£${pounds}.${pence}`); //The values obtained from pounds and pence are placed such that they are separated with a decimal point

// In week-1, there is a program written in interpret/to-pounds.js

function toPounds(penceString) {
  penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );
  paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
  return `£${pounds}.${pence}`;
}
// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
console.log(toPounds("4p"));
console.log(toPounds("9009p"));
console.log(toPounds("150000p"));
console.log(toPounds("399p"));
