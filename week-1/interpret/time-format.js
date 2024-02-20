const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? - just 7

// b) How many function calls are there? - there's only 1 which is console.log

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents - The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? - it means ((8784 - (8784/60))/60), it is giving us the run time of the movie in minutes by converting the length of the movie in seconds first and then in minutes 

// e) What do you think the variable result represents? Can you think of a better name for this variable? - it shows the rmaining hours, minutes and seconds of the movie, for example a movie is 150 mins long which would be the total minutes, then the remaining minutes would be 60 - a better name would be run time 

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect? - a negative and decimal value 
