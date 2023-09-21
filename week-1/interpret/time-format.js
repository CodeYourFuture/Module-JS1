const movieLength = 4547;

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// line 1, line 3, line 4, line 6, line 7, line 9, line 11

// b) How many function calls are there?
// only one. Console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
//It stores reminder seconds because  when movielength % 60 its convert it into minutes. while the remaining seconds are now store into variable called
//  remainingSeconds 


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Subtracting remainingSeconds from movieLength, it give the exact number of seconds which are divisible by 60.
// This division is performed because there are 60 seconds in a minute.And it give number of minutes.
//it convert the duration from seconds to minutes.



// e) What do you think the variable result represents? Can you think of a better name for this variable?
//it is representing total duration if the movie. It should be named 'MovieDurationleft'


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tried 99999999999999999999999999999999999999999999999999999999999999999999999999999, it gave the result 00.40.34 something.
// What I get is that at the line 9 if we added maximum number of seconds,
//the remainingHours will be more than 24 hours, and if they more then 24 hours it will set it to 0. 
//otherwise, it works fine even for the minimum value.