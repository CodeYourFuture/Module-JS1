const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

console.log(num);

// *** The num variable represents a random integer number between the assigned range (the assigned value of variable minimum and the assigned value of the variable maximum) ***

// 1:   (maximum - minimum + 1): First, the expression inside the parentheses is evaluated.
// It calculates the size of the range by subtracting the assigned value of the variable minimum from the assigned value of the variable maximum and adding 1(this includes the value of the variable maximum).
// This determines how many possible integers are in the range.

// 2:  Math.random(): The Math.random() function is called, generating a random floating-point number between 0 (inclusive) and 1 (exclusive).

// 3:   Math.random() * (maximum - minimum + 1): The random number generated in the previous step is multiplied by the range size calculated in step 1.
// This scales the random number to fall within the range.

// 4:   Math.floor(...): The result from the previous step is passed to Math.floor() to round the scaled number down to the nearest integer.
// This ensures that the final result will be a whole number.

// 5:   + minimum: Finally, the value of the minimum variable is added to the rounded number.
// This step adjusts the random integer to fall within the specified range between the assigned values of the variables minimum and maximum.
