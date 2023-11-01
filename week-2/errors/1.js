// Predict and explain first...

// Why will an error occur when this program runs?
/* The const keyword is redefining the variable decimalNumber that has been already defined 
  in the function parameter, and in the console.log it is trying to log to a decimalNumber variable all  
  function parameters are a local variables
  and as we want to put any number in the function argument the decimalNumber variable can not have a fixed value . 
  */
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.3));
