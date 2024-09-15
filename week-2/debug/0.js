// Predict and explain first... 

  // we declared a function which gives us the multiplication of two given parameters output is "The result of multiplying 10 and 32 is 320"

  // because of the console.log function in the function, every time is it called, the multiplication will be printed on the console. we can fix it with return method

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
