const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
console.log(remainingSeconds);
const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log(totalMinutes);

const remainingMinutes = totalMinutes % 60;
console.log(remainingMinutes);
const totalHours = (totalMinutes - remainingMinutes) / 60;
console.log(totalHours);

const remainingHours = totalHours % 24;
console.log(remainingHours);

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
/*
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
seven variables

// b) How many function calls are there?
one function call

// c) Using documentation, explain what the expression movieLength % 60 represents
it means the number will have a remainder after division operation

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
it means first you get the subtraction of movieLength and remainingSeconds then divide by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
It can be the variable name const timeRemaining

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
Yes