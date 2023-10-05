const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 7

// b) How many function calls are there? none

// c) Using documentation, explain what the expression movieLength % 60 represents
// it calculates the remainder (seconds) after removing the full minutes out by dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it means subtracting the remainingseconds from the movielength and dividing by 60. This means there are 24 seconds remaining after removing 146 full minutes from the original 8784 seconds.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represents the duration of the movie in the format of hour minute and seconds. a better name:movieDuration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// it works with any integer as long as it is positive.