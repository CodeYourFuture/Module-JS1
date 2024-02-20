// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// this code means a and b are addedd together, in this case a is the first number which is 10 and b is the second number which is 32, console log will show The sum of 10 and 32 is undefined because the function closes after return and a+b is written on the next line which is wrong, it should be return a+b 
