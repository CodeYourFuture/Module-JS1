// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

function camelCaseToWords(text) {
    const result = text.replace(/\s/g, "_");     // Use '\s' to match whitespace characters and replace them with underscores (g) mean replacement should be done globally .
  return result.toUpperCase();
}
const text = 'hello there';
console.log(camelCaseToWords(text));

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
function camelCaseToWords(textTwo) {
    const result = textTwo.replace(/\s/g, "_");   
  return result.toUpperCase();
}
const textTwo = 'lord of the rings';
console.log(camelCaseToWords(textTwo));


// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
function camelCaseToWords(textThree) {
    const result = textThree.replace(/\s/g, "_");   
  return result.toUpperCase();
}
const textThree = 'lord of the rings';
console.log(camelCaseToWords(textThree));
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"
function camelCaseToWords(textFour) {
    const result = textFour.replace(/\s/g, "_");   
  return result.toUpperCase();
}
const textFour = 'lord of the rings';
console.log(camelCaseToWords(textFour));

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution
