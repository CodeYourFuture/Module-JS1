// Predict and explain first...

function sum(a, b) {
  return(a + b);
 // a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// when we call the sum function it will not work fully because it will pass the values to the function but will not receive any return.
// to fix this issue "return" must return a value.
// line 5 "a + b;" is useless.
// so instead of line 4 and line 5 we can just write 1 line "return(a + b);" this will fix the issue.