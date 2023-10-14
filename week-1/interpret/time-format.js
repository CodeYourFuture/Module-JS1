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
10 variable declarations
// b) How many function calls are there?
0 function calls
// c) Using documentation, explain what the expression movieLength % 60 represents
movieLength % 60 represents the remainder of the division of movieLength by 60. In this case,
 it is used to calculate the remaining seconds after calculating the total minutes.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
totalMinutes means that the total number of minutes is calculated 
by subtracting the remaining seconds from the total length of the movie, 
and then dividing by 60 to get the total number of minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
represents the remaining time of the movie in hours, minutes, and seconds.
// f) Think about whether this function will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
This function will work for all values of movieLength,
 as long as they are non-negative integers.
  However, if movieLength is 0, the function will return "0:0:0", 
  which may not be the expected result. In this case, the function should return "0:0:0" 
as this represents the correct remaining time for a movie of length 0.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const remainingTime = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(remainingTime);
