const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6
/*
const movieLength = 8784;
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const remainingHours = totalHours % 24;
*/

// b) How many function calls are there? 1
//console.log(result);

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
//This is  modulo operation, and it returns the remainder of the division. Here it says the variable movieLength, is divided by 60 and The % modulo operator,  returns the remainder of the division operation.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/*to find the total minutes of the movie;
 we Subtract the remaining seconds (remainingSeconds) from the total seconds (movieLength) 
 and we Take the result and divide it by 60.
 The final result is the total number of minutes in the movie, stored in the variable totalMinutes."*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* It expresses the length of the movie in terms of hours, minutes, and seconds.
The format is HH:MM:SS, where HH is the remaining hours, MM is the remaining minutes, and SS is the remaining seconds.
My suggestion for  result variable is :
const movieDurationDisplay */

// f) Think about whether this program will work for all values of movieLength.
//The program correctly converts the total seconds into a formatted string representing hours, minutes, and seconds.It should work correctly for any positive integer value of movieLength.

//    Think of what values may cause problems for the code.

//    Decide the result should be for those values, then test it out.

//    Can you find any values of movieLength which don't give you what you'd expect?
