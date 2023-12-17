// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution

///answer

function toUpperCamelCase(inputString) {
  // Split the input string by spaces
  const movieName = inputString.split(" ");

  // This is like creating an Array. For instance, when you input "lord of the rings," it transforms into an array ["lord", "of", "the", "rings"] by splitting it at each space.

  // Capitalize each word and join them with underscores
  const upperCamelCase = movieName.map((word) => word.toUpperCase()).join("_");

  return upperCamelCase;
}

console.log(toUpperCamelCase("lord of the rings")); //  "LORD_OF_THE_RINGS"
console.log(toUpperCamelCase("the great gatsby")); // "THE_GREAT_GATSBY"
console.log(toUpperCamelCase("the da vinci code")); // "THE_DA_VINCI_CODE"
console.log(toUpperCamelCase("darkness of the night"));

// The map() function iterates over each element (each word) within the movieName array. It takes each element (referred to as word) and converts it to uppercase using toUpperCase(). After this transformation, it then joins these converted words (using join("_")) with an underscore (_) in between each word. This process results in a string where each word is in uppercase and separated by underscores.

//self study
/* function toUpperCamelCase(inputString) {
  const movieName = inputString.split(" ");

  const upperCamelCase = movieName.map((word, index) => {
    
    if (index === 0 || index === movieName.length - 1) {
      return word.toUpperCase();
    } else {
      return word.toLowerCase();
    }
  }).join("_");

  return upperCamelCase;
}

console.log(toUpperCamelCase("the da vinci code")); // "THE_da_vinci_CODE"
