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
// 7

// b) How many function calls are there?
// There are no function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// It represents the number of seconds remaining after converting as many full minutes as possible.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It converts the total movie length from seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents a formatted time representation of the movieLength in the format hours:minutes:seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code is to ensure that the time representation is accurate and follows the "hours:minutes:seconds" format.
