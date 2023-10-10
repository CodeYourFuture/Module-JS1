// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on.
// we have a function with a parameter decimalNumber and within this function we are trying to declare a new variable with the same name of the parameter e.g. const decimalNumber however we cannot use the same name within the scope. to fix this we can remove const decimalNumber=0.5; and in the console.log write the function with 0.5 as a parameter e.g. console.log(convertToPercentage(0.5));

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

