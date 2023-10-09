// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

//This will not work because in line 7 the variable decimal number declaration came after the function. It should come first then the function declaration.
//Also we need to call the function in the console log for it to work.

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

//I have corrected the code below

function convertToPercentage(decimalNumber) {
 
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}


console.log(convertToPercentage(0.7));
