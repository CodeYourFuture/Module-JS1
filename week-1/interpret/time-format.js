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

//ans; Their is 7 variable declarations. In line 1,3, 4, 6, 7, 9, and 11.

// b) How many function calls are there?

//ans;  there is no function have been called.

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

//ans; the remainder of the division of movieLength by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//ans; the total remainingSeconds is in integer.
// e) What do you think the variable result represents? Can you think of a better name for this variable?

//ans; the length of move in hours minutes and seconds. can be length.

//ans; it will bring an output result of 2 : 26: 24

// f) Think about whether this program will work for all values of movieLength.  
//ans ; yes
//    Think of what values may cause problems for the code. 
// ans; infinity
//    Decide the result should be for those values, then test it out.
// ans; the results undefine
//    Can you find any values of movieLength which don't give you what you'd expect?
//ans; no
