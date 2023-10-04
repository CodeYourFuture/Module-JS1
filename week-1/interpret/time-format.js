const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

/*
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

5

// b) How many function calls are there?

0

// c) Using documentation, explain what the expression movieLength % 60 represents

The expression movieLength % 60 represents the remainder when movieLength (which is the length of a movie in seconds) is divided by 60. This calculates the number of remaining seconds after all full minutes have been accounted for.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

Line 4 calculates the remainingSeconds by taking the remainder when movieLength is divided by 60. This essentially extracts the number of seconds that are left after removing full minutes from movieLength.



// e) What do you think the variable result represents? Can you think of a better name for this variable?

The variable result represents a formatted string representing the duration of the movie in hours, minutes, and seconds. A better name for this variable could be something like formattedDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

The code should work for any value of movieLength because it correctly calculates the remaining hours, minutes, and seconds from the given duration in seconds. It accounts for cases where the duration is longer than 60 seconds and longer than 60 minutes. The calculations ensure that the time is represented accurately in hours, minutes, and seconds.