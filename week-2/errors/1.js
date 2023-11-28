// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


// Predicted Error:
// I predict that there will be a reference error indicating that decimalNumber is not defined
//  when the console.log(decimalNumber); statement is executed.

// Explanation of the Error:
// The decimalNumber variable is declared as a parameter of the convertToPercentage function.
// However, within the function, a new constant decimalNumber is declared and initialized with the value 0.5. 
// This new declaration creates a local variable that shadows the function parameter.
// When the console.log(decimalNumber); statement is executed outside the function, 
// it is referencing the global scope where decimalNumber is not defined. 
// The local variable declared within the function does not exist outside of that function's scope.
// To fix this issue, you should remove the redundant declaration of decimalNumber within the function:
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));


// Now, the function takes the decimalNumber as a parameter, 
// and you can pass a value when calling the function. 
// The console.log statement at the end correctly logs the result of the function call.





