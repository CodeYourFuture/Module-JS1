// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution


function convertToUpperCaseCamelCase(inputStr){
    return inputStr.replaceAll(" ","_").toUpperCase();
}

console.log(convertToUpperCaseCamelCase("lord of the rings"));             
console.log(convertToUpperCaseCamelCase("the great gatsby"));         
console.log(convertToUpperCaseCamelCase("the da vinci code"));         