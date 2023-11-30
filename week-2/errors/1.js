// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on
//In this code, there is an error that the variable decimalNumber, declared twice. once as a parameter of the convertToPercentage function and again outside the function, because in JS variables can't be declared twice within the same scope
// to fix this error, we need to delete the parameter in line 8, so we can call the function without any argument.

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
