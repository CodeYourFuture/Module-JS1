// Currently trying to print the string "I was born in Bolton" but it isn't working...
// Ans: Before log a variable we need to define it first.

// what's the error ?
//ans : In JavaScrip/node.js the code executed from top to bottom, any variable must be declare before log in to console.

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// here is the correct code
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);