// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The function defined as "sum" is meant to return the addition of two numbers a and b. But it has an error in that
// what is to be returned should be stated after the keyword "return" before the semicolon.
// Since the function is not properly defined, line 8 will output;
// The sum of 10 and 32 is undefined.
// To fix this, re-write the function by merging the lines 4 and 5 as " return a + b;"
