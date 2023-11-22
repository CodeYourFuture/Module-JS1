// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on
// it doesn't work
// the code used decimal as a constant variable inside the function and again as a parameter.
// If we take out thr variable decimal inside the local scope and put it as global will make it work.

function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;
console.log(decimalNumber);
