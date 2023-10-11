// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"

//we should remove the second line as decimal number,This is not allowed by JavaScript because it redeclares the same variable name in the same scope.
//To fix these issues and make the code work, you should remove the redundant declaration of decimalNumber inside the function and pass the value as an argument when calling the function.

