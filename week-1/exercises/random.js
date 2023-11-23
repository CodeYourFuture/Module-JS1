const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
      //num represents integer number.
// Try breaking down the expression and using documentation to explain what it means
      //Math.random is to return random number between 0 and 1
      //Math.floor is to round the number to be integer.
      //(maximum-minimum+1) is to return the integer between 1 and 100

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
         //The Program is to return a random integer between 1 and 100
         
console.log(num);