// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// 320 and undefined because a and b are saved in the local scope not in global.
//  If we put return instead of console inside the function it would work 