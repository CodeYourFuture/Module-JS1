// Predict and explain first...

// this function `onvertToPercentage` aims to convert a `decimalNumber` into precentage .
// `decimalNumer` is the function's paramter and it's been declared inside the function and it causes a
// name conflict and error , to fix this we can remove this line , ` const decimalNumber = 0.5;` ;
// and it should work .

// nother error is in this line of code `console.log(decimalNumber);` ; console attempt to log `decimalNumber` ;
// while `decimalNumber` is not available for console as it is accessable only in the function scope , it's not a global variable.



// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

//console.log(decimalNumber);
console.log(`${convertToPercentage(0.95)}`)

// lines which causes error has been commented and this version is workinh properly .