const movieLength = 456789; // length of movie in seconds

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

    // 1

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

    // the remainder when you divide movie length by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

    // subtract the remainder seconds from total seconds to be able to ge integer value when we divide it by 60 as a minute

// e) What do you think the variable result represents? Can you think of a better name for this variable?

    // it represents the total time as in h:m:s format, we can name it totalTimeInFormat

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
    // 0 can be a problem
//    Decide the result should be for those values, then test it out.
    // js will cause error because it cant divide a number with 0
    //it didnt give error
//    Can you find any values of movieLength which don't give you what you'd expect?
    //no even strings are working fine
