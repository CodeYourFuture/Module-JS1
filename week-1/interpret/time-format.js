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
// There are 7.

// b) How many function calls are there?
// There isn't any function calls.

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

// This represents how many seconds are in a minute.
// This ensures that all the minutes are accounted for, and any remainders will be formatted in seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It means that I want you to collect the movieLength which is (8784), I want you to minus the remainingSeconds from this,
// and because remainingSeconds seconds is stored in a variable, it works out what the sum should be for remainingSeconds,
// which is (24 seconds). This leaves us with a sum from the expression movieLength - remainingSeconds = (8760),
// which if then divided by 60 = (146).

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The amount of time left of the film
// const filmTimeLeft = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The code will work with all values for movieLength. When the result is executed with a value of 1,
// the timer will display 0(Hours):0(Minutes):1(Seconds).
// I did notice though that if I changed this number to a ridiculous number for example: 100000000000000 or 1000000000,
// it would return the same value, which it should not
