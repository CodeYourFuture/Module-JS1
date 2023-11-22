// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

// Initial provided code:

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// Fixed code:

function capitalise(string) {
  let str = `${string[0].toUpperCase()}${string.slice(1)}`;
  return str;
}

console.log(capitalise("test"));

// The predicted error in the code is a SyntaxError for redeclaring an identifier.
// This error appears because the variable "str" is declared twice within the same scope, once as a parameter of the function and then again inside the function body.
// The code is attempting to capitalise the first letter of the input string, but the redeclaration of "str" breaks the JavaScript's rule and the code doesn’t provide the intended result.
// To fix this issue, the redundant declaration inside the function should be removed, allowing the code to successfully capitalise the first letter of the input string and return the modified string.
