const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//Math.random() function returns a floating-point number between 0 (inclusive) and 1 (exclusive). It's essentially a random decimal number. like spinning a wheel with numbers between 0 and 1. It gives  us a random decimal, like 0.567 or 0.874.

//maximum - minimum + 1: This part helps decide how big your range on the number line should be. If you want numbers from 1 to 100, the range is 100 - 1 + 1, which is 100.
// Math.floor(...): This is like rounding down to the nearest whole number. So, if you got 56.78, you round down to 56.
//+ minimum: Finally, you add the starting point of your range. If the minimum is 1, you add 1 to the rounded-down number. So, if you got 56 earlier, you add 1 and get 57.

console.log(num); // Here  we get random numbers each time

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
