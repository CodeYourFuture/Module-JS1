// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

//This will not work because in line 7 the variable decimal number declaration came after the fuction. It should come first then the function declaration.
//Also we need to call the function in the console log for it to work.
//I have corrected the code below
/*
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
*/