const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
const numRand = Math.random();
console.log(`Random number: \n   ${numRand}`); // this generates a random number (a float) between 0 and 1.

console.log(`max-min plus 1:\n   ${maximum - minimum + 1}`); // evaluates to 100.

const numRandCent = numRand * (maximum - minimum + 1);
console.log(`multiplied by 100:\n  ${numRandCent}`); // a random number is generated and multiplied by 100

const numRandCentFloor = Math.floor(numRandCent);
console.log(`floored num:\n  ${numRandCentFloor}`); // the floor integer of the value generated above is obtained

const num = numRandCentFloor + 1; //last part
console.log(`num = ${num}`); // num is the random value generated from line 14 above plus minimum (i.e. 1)
