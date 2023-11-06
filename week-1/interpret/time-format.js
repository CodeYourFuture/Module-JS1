const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
console.log(remainingSeconds);
const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log(totalMinutes);

const remainingMinutes = totalMinutes % 60;
console.log(remainingMinutes);
const totalHours = (totalMinutes - remainingMinutes) / 60;
console.log(totalHours);

const remainingHours = totalHours % 24;
console.log(remainingHours);

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 7 variables declarations.

// b) How many function calls are there?
// there is 1 function.

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
// Represent the reminder of the division of 8784 / 60; the reminder is 24 s.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Represent the reminder of the division of 146 min / 60; the reminder is 26 min.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// represent the total duration of the movie. lengthTimeMovie

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
// Negatives numbers.
