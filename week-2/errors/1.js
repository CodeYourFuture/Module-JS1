// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// The "decimalNumber" declared twice inside the function  "convertToPercentage". in line 6 and 7.
// The "decimalNumber" in line 13 outside the function "convertToPercentage" is not declared or unknown.
// we must delete the parameter in line 6 or delete line 7.
// In line 13 instead of function parameter we must call the function.
// our calling will depend on what we will do with 'decimalNumber' inside the function.
// if we deleted the parameter in line 6, we will call the function in line 13 without passing any argument.
//if we deleted line 7 and kept the parameter in line 6, then we will pass the argument when we call the function in line 13.
// Let us try the code as below:

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());

