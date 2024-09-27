// Predict and explain first...
//The semicolon (;) following the return statement causes an immediate termination of the function. This semicolon prevents the continuation of expressions within the block and disregards the rest of the function.

function sum(a, b) {
  //return; a + b; } so it will be like this
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
