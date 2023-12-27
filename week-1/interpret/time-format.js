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
// =>There are 7 variable declarations in this Program.
// b) How many function calls are there?

// =>There are no function calls.

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
// =>In JavaScript module Operatoor(%) means remainder. So movieLength % 60 means it will give remaining seconds when movieLength is divided by 60.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// => This line 4 calculate the total minute in the movie. It subtracts the remaining seconds from movieLength and divide the result by 60 to convert seconds to minute.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
