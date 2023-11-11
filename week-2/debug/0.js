// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// there is a function created called multiply and is waiting for 2 vaules (a, b), when we call it this function
// and we declare the 2 values will show the multiplication 320 in the console log inside the function but in the
//console log outside the function it will bring an undefined.
// There is a problem because after the function we didn't use the key word return and the function multiply
// doesn't return a value.
