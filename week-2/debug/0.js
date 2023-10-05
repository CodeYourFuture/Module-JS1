// Predict and explain first...

function multiply(a, b) {
  return a * b;
  // console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The function named 'multiply' is defined to find a product of two numbers a and b. Therefore, the function will return 320
// and the console.log in line 7 will return the following;
// The result of multiplying 10 and 32 is undefined. This is because, calling console.log within console.log returns undefined for the inner function.
// In my opinion, I think it is better to use "return" instead of console.log()
