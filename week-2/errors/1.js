// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// because decimalNumber has been declared twice, once on the function parameter and again in the function body that is why it gives a syntax error of already been declared. 
// to solve this error, remove the const decimalNumber from inside the function and let it a variable outsid the function 
// then remove the decimal number from function parameter and console.log(convertToPercentage()) will give you 50%