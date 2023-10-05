// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// The output will be 320 in the first console. This is because the function multiply has set an instruction inside the calibraces to multiply any two numbers that are given in the parameter of the function multiply.
// However in the second console.log the result will be undefined because it is a local variable so we need to give it a return value for it to work.

// This is how we can write it for it to work;
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);