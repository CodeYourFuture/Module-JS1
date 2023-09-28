const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

console.log(Math.random()); //Math.random() = selects randomly any number from 0 to 1

console.log(Math.floor(Math.random() * (maximum - minimum + 1))); //Math.floor() = rounds up the decimal integer that is randomly selected in the value expression of the variable "num".

const randMaxMin = Math.random() * (maximum - minimum + 1); //* = multiplies the random number by the expression of the second brackets.
console.log(randMaxMin);

const maxMinPlus = maximum - minimum + 1; //(maximum - minimum + 1) = this is the expression of the first variable and second variable which equals to 100.
console.log(maxMinPlus);

console.log(num);
