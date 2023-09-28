const movieLength = 7498; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//Answer:
/*  (a) There are 8 variable declarations in this program.
    (b) There is only 1 function call which is the console.log()
    (c) const remainingSeconds = movieLength % 60: This expression calculates the remaining seconds left in the movie by getting the remainder using modulus operator. 
    (d) The expression assigned to totalMinutes means to calculate the total number of minutes without a remainder.
    (e) (i)     The variable result represents the total number of time that would be spent to watch the movie.
        (ii)    Duration
    (f) Having experimented with random movie Length, there is high probability that it will work for all values of movie length.
    */