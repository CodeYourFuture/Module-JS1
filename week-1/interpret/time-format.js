const movieLength = 86399; // 8784 length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 7 variable declarations

// b) How many function calls are there?
//  There are no function call except console.log used to log the result.

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression is used to find the remainder that could be obtained when movieLength is divided by 60.
// The sign "%" is a modulo operator, and is used to find the remainder of division expression.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The totalMinutes (i.e. the length of the movie in minutes) is found by; first subtracting remainder seconds from total length (in seconds) such that the
// length (in second) is exactly divisible by 60 with no remainder. By so doing, total length in minutes is obtained by dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable, result, represents the total length of the movie in hours, minutes and seconds.
// movieLengthFormatHMS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// NO. It doesn't work for movieLength beyond 23h:59min:59s. After this limit, that is, at 24:00:00, it resets to 0:0:0. To fix this,
// values of conversion could be set for day when hours > 24, and so on. Realistically, movie length can hardly be more than 24h. But it is still possible.
