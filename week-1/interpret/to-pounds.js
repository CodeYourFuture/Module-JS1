const penceString = "399p"; //this defines the value of the pence in a string which is 399p

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // substring means it extracts a character, it is usually written like this substring(indexStart) or substring(indexStart,indexEnd)
// in this example it is substring (0, penceString.lenght -1) which means 0 is the first character which is 3 in this example and -1 means the last character is being cut off so it will be 399

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // this means it will add a character or value to the string until it reaches the length required which gives a value of 399 as it already is 3 lenghts long
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); 

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // substring in this example means it will cut off the first 2 characters fromt he start so it will be 3
  // padend means it will add the specified character starting from the end until it reaches the desired number which gives a value of 99 

console.log(`£${pounds}.${pence}`); // this will log the string value of pound and pence which is £.99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
