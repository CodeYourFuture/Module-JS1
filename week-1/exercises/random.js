const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means

// Get random number between 0 and 1
//let randomDecimal = Math.random();  

// Scale number to be between min and max
//let randomInRange = randomDecimal * (max - min + 1);  

// Shift number to start at min instead of 0
//let randomNumber = randomInRange + min;

// Convert to integer 
//let result = Math.floor(randomNumber);

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

console.log(num);

//ans : we declared variable minimum with vale 1, and maximum with 100. We have an other variable num with statement. 
 //We use Meth.floor method to erase decimal point and Math.random method to take any number include 0 and exclusive 101.
 
