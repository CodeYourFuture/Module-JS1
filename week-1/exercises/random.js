const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// Ans. The expression is getting a random number between 0 to 1 with Math.random which can be equal to 0  but always less than 1 and then it gets rounded up by Math.floor and added to minimum which will essentially at the end provide us with any number between 1 to 100 randomly based on what Math.random() gives us. 
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
console.log(num);
