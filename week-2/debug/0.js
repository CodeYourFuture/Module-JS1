// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


//this function doesn't return a value it just log the multiplication of given parameters ; 
//if a function doesnt reurn a value , its return will be undefined so if we need to correct this 
//we simply should call the function or correct the function as below ,

function multiply2(a, b) {
  return a*b;
}

console.log(`this is another function that return the result of multiplying 10 and 12 is ${multiply2(10, 12)}`);
multiply(2,3);
