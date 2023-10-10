// Predict and explain first...

// this function should square any number but instead we're going to get an error

//First, the function parameter should be a variable name, not a number. Second, we need to use the parameter inside the function to calculate the square.
// Error type: Unexpected number

function square(num) {
  return num * num;
}
const result = square(10);
console.log(result);
