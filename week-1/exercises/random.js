const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


console.log(num);
console.log(Math.floor(num));
console.log(Math.floor(maximum - minimum + 1));//100//
console.log(Math.floor(Math.random() * (maximum - minimum + 1)));
console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);

// In this exercise, you will need to work out what num represents?

//answer:the result is num will be a random integer between 1 and 100 (inclusive).
 

// Try breaking down the expression and using documentation to explain what it means

/*Math.random(): Math.random():This method returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
Math.floor():This method rounds down a number to the nearest integer.
The code combines these functions to generate a random integer between 1 and 100 by scaling the random number to the desired range and then shifting it to start from the minimum value.
*/


// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
