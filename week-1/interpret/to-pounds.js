const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); //Remove the character 'p' from the end of the string

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // declaration of pence value as a number
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); // declaration of pound value by cutting part of the string. 

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); //declaration of pence value by cutting part of the string.

console.log(`£${pounds}.${pence}`); // output is the declared pound value and pence value separated by ".".

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Substring, padStart and padEnd : to return part of string.
