const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
// It shows a random number from 1 to 100.
// Math.random() returns a number equals or bigger than 0 and less than 1.
// Multiplication by (maximum - minimum + 1) ensures that the Math.floor will return a number
// From 0 to 99.
// The + minimum ensures that the num variable will be a number from 1 to 100. 