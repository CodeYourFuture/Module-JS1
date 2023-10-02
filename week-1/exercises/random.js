const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
console.log(maximum - minimum + 1);// it is returning 100 as it subtracting min from max and then adding integer 1.
console.log(Math.random()); // this method is returning a random value.
console.log(Math.random() * (maximum - minimum + 1));// this part of code is is multiplying the random value to 100.
console.log(Math.floor(Math.random() * (maximum - minimum + 1)));//it s returning the integer part equal or less than the number of the value coming from this part Math.random() * (maximum - minimum + 1))
console.log(Math.floor(Math.random() * (maximum - minimum + 1)+1))// and then adding one 1 at the end to make sure it remain between 1 and 100.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
