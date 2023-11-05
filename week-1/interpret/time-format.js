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
// Ans. 7

// b) How many function calls are there?
// Ans. None

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
//Ans. This expression is providing us with the remainder of any seconds which are less than 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Ans. It is calculating the minutes of movie which are less than 60 after taking out any extra seconds which are less than 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Ans. It represents the total length of movie broken down in hour, mins and seconds. We can also call it MovieRuntime

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
// Ans. It will not really work for the negative values or values with decimal places I think, testing it out it gives a negative result and with fraction the seconds can go wierdly long 
