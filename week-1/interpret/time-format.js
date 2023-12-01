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

//* 7 const movieLength = 8784; // length of movie in seconds
// const remainingSeconds = movieLength % 60;
// const totalMinutes = (movieLength - remainingSeconds) / 60;
// const remainingMinutes = totalMinutes % 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;
// const remainingHours = totalHours % 24;
// const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;


// b) How many function calls are there?

//* const totalMinutes = (movieLength - remainingSeconds) / 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;


// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

// * movieLength % 60 represents the remaining seconds after dividing movieLenght by 60 (seconds)

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//*const totalMinutes = (movieLength - remainingSeconds) / 60; It calculates total minutes by dividing movieLength - remainingSeconds by 60


// e) What do you think the variable result represents? Can you think of a better name for this variable?

//* formattedMovieLength

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?

//*This program will work for all positive integer values of movieLength. However, it may not handle negative values. Like movieLength = -8784
// for negative values we can add a conditional check and take the absolute value.
