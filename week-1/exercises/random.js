const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


// - minimum and maximum are constants that define the range of numbers to generate. 
//   minimum is set to 1 and maximum is set to 100.
// - Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). 
// - (maximum - minimum + 1) calculates the number of integers between the min and max values, inclusive. 
//   In this case it's 100 - 1 + 1 = 100.
// - Multiplying Math.random() by (maximum - minimum + 1) gives us a random decimal between 0 and 100.
// - Math.floor() rounds the random decimal down to the nearest whole number.
// - Adding minimum (which is 1) to the rounded number offsets the range to be between 1 and 100 instead
//   of 0 and 99.
// - So Math.floor(Math.random() * (maximum - minimum + 1)) + minimum ultimately generates a random
//   integer between the min and max values of 1 and 100.
// - The result is logged to the num and tested.
// So in summary, it uses Math.random(), Math.floor(), min/max ranges, multiplication, and addition 
// to generate a random number between two set values.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
