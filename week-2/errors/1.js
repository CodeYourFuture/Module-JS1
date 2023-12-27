// Predict and explain first...
// Write down the error you predict will be raised
// => parameter and variableName are same.
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {

// const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
// }

// console.log(decimalNumber)


// corrected code-:
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;

}

console.log(convertToPercentage(0.5));