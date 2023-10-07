// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution

// itried to use prompt to take an input from user and i face some errors i leave the code like this 
//and without using prompt it works correctly.

const prompt = require('prompt-sync')();
function setToCamelCamelCase(str) {
  str = str.toUpperCase().replace(/ /g, '_');
  return str;
}

let inputt=prompt("enter a text: ")
console.log(setToCamelCamelCase("lord of the rings"))

console.log(setToCamelCamelCase(inputt))