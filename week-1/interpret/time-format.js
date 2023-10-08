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

// there are 7 in line 1,3,4,6,7,9,11

// b) How many function calls are there?
//one as consol.log

// c) Using documentation, explain what the expression movieLength % 60 represents

//The expression movieLength % 60 simply calculates the remaining seconds when you divide the total movie length (in seconds) by 60. It extracts the seconds part of the duration.



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//Subtracting remainingSeconds from movieLength, it gives the exact number of seconds which are divisible by 60.
// This division is performed because there are 60 seconds in a minute.And it gives number of minutes.
//it converts the duration from seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

 //representing total duration of the movie
 //name for this variable could be formattedMovieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


