const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

/////////////////////////////////////////////////////////////////
//EXPLAINATION :
//this a formula to create a random number between two number and by using Math.floor it becomes an integer number .
// priorty is like mathmatic and starts with the inner paranteses which are (maximum - minimum +1) and then multiplied by ..
// .. math.random() which creates a random number between (0,1) , so far =>..
// (100 -1 +1) =100 =>math.random()*100 . result is a adecimal number between 0 and 100 . 
// after that math.floor round the number to the nearest smaller integer number and result is added up to the minimum  .
//
