const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");


const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);


const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");


console.log(`£${pounds}.${pence}`);
/*
// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); : this is to remove the p letter at the end of the string 399p
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); This is to pad the string with another string so it could have 3 characters which remained to be 399
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); This code is to initialize the value in pounds by removing the last two digits of the string
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); This is to initialize the value of pence from the string 399 by only taking the last two digits of the string
console.log(`£${pounds}.${pence}`); This initializes the value of pounds and pence from the string.