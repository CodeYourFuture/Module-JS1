// Predict and explain first...
// This is a function. Functions are used to do a certain action, not store
// a variable with the parameters name. Parameters are used to be called at a later date.

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const pcentFunctionTest = convertToPercentage(0.5);
const pcentFunctionTest2 = convertToPercentage(9);

console.log(pcentFunctionTest);
console.log(pcentFunctionTest2);
