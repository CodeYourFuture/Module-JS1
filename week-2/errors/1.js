// Predict and explain first...
// The function aimed at converting decimal to percentage. But the function and the code below have many issues.
// 1. The parameter name, decimalNumber has been defined within the function. It can't take external value.
// 2. Declaring what the function should do as a variable is unacceptable. In other words, "percentage" definition
// does not need declaration. Remove the const keyword
// 3. The function call is erroneous. Locally declared variable within the function is called here, not the function itself.

// Why will an error occur when this program runs?
// Because of the reasons summarised in points 1 to 3 above.
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);
// The code can be corrected as follows;
function convertToPercentage(decimalNumber) {
  percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.3));
