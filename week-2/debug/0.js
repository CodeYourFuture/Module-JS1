// Predict and explain first...
/* The last log calls the function multiply, the function receive the data 
and print the multiplication with its console.log (inside the function).
As console.log doesn't declare anything, the last console.log (the first read)
will print the string right, but the variable will be undefined. */

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
