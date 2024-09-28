// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

// function square(3) {
//     return num * num;
// }

function square(num) {
  return num * num;
}

console.log(square(3));

// The predicted error in the code is a SyntaxError: Unexpected number.
// This happens because the function is defined with a specific number (3) as a parameter, which is not valid syntax.
// To fix this issue, the function declaration should use a variable as the parameter, allowing the function to square any number passed to it.
