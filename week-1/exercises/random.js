const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//* num represents a random integer between 1 and 100 (inclusive). 
//Math.floor(...): This rounds down the result of the expression inside it to the nearest integer. 
//This is done to ensure that the final result is an integer.
// Try breaking down the expression and using documentation to explain what it means
//**(maximum - minimum + 1): This calculates the range of numbers between maximum and minimum (both inclusive). 
//**Adding 1 ensures that the upper bound is included in the range. */
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
