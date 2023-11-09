const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//ans; 1  variable declarations.

// b) How many function calls are there?

//ans; 1 function, console.log

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

//ans; it represents how long will the move take.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//ans; it mean what ever the value of remainingSeconds is we subtract it from and divide it by 60. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//ans; it will bring an output result of 2 : 26: 24

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
