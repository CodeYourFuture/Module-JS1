const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?  There are five variable declarations in this program:

// b) How many function calls are there? There are zero function calls 

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents. it represents the reminder. 
//                                    (It calculates the remaining seconds after all the full minutes have been counted.)

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? It extracts the seconds in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the variable result represent (hours:minutes:seconds) time format, a better name would be (formattedTime)

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect? yes, it is not considering (days) in the calculation.
