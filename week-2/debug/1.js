// Predict and explain first...
// console.log will print the string correctly, but the function
// will be wrong (undefined), as it will not return anything (look the semicolon after return).

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
