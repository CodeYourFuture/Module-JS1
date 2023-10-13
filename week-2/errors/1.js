// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/*The error occurs because redeclaring the decimalNumber
 variable within the function replaces the reference to the 
 decimalNumber parameter. The variable name is reassigned to 
 a local constant, making the parameter inaccessible within
  the scope of the function. when we try to access decimalNumber 
  outside the function, it is not defined in the global scope, 
  resulting in an error.