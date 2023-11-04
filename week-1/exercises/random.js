const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// Ans. The expression is trying to multiply a random number from 1 to 100 with 2 and then adding 1 to the value
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
console.log(num);
