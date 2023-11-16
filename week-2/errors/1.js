// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

// console.log(decimalNumber);

console.log(convertToPercentage(0.5));

// The predicted errors in the code are ReferenceError and SyntaxError.
// When the program attempts to access "decimalNumber" outside the function's scope in the "console.log(decimalNumber)" statement, it encounters a reference error since the variable is not defined in the global scope.
// The other error is SyntaxError, which the variable "decimalNumber" is declared both as a parameter of the "convertToPercentage" function and as a local constant inside the same function, leading to a conflict.
// We can resolve the conflict and allow proper access to the parameter, preventing the ReferenceError and SyntaxError by removing the redundant local declaration of decimalNumber inside the function.
