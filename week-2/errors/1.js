// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on
// decimalNumber is already declared as a parameter, the function waits an input and
// console.log is calling the variable inside the function, not the function.

function convertToPercentage(decimalNumber) {
  // decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.6));
