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
//there are 7 variable in this pice of code
// b) How many function calls are there?
// we don't have function here
// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
//remainingSeconds = movieLength % 60;=> this expression is ..
//..help us to get the remaining second after variable movieLength divide by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes assign to change moveLength in to minutes by subtract from movieLength
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//result represent the remainingHours, remainingMinutes and the remainingSeconds
//i suggest replacing the variable name "result" with "remainingHours" to enhance clarity.
// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
