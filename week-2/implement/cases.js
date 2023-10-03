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

function toSnakeCase(text) {
  const textOutput = text.replaceAll(" ", "_").toUpperCase();
  return textOutput;
}

const text1 = toSnakeCase("hello there");
const text2 = toSnakeCase("my name is marcus,");
const text3 = toSnakeCase("& i am currently studying at code your future...");

console.log(text1);
console.log(text2);
console.log(text3);
