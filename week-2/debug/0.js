// Predict and explain first...

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// Here the multiply function  didnt return only console.log. So without return if it uses console.log, it wont give the number instead it will output as undefined.
// so, the corrected code would be-:

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);