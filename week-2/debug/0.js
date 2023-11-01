// Predict and explain first...
// the function must have a return to work properly when we calling the function the console.log work to show the result
// but since there is no return in the function we will get undefined result when trying to use the function
// to fix this we replace console.log in the function with return.
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
