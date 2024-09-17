let movieLength = 8784; // length of movie in seconds

movieLength = 0;

console.log(`The value of movieLength is: ${movieLength}`);

const remainingSeconds = movieLength % 60;

console.log(`The value of remainingSecond is: ${remainingSeconds}`);

const totalMinutes = (movieLength - remainingSeconds) / 60;

console.log(`The value of totalMinutes is: ${totalMinutes}`);

const remainingMinutes = totalMinutes % 60;

console.log(`The value of remainingMinutes is: ${remainingMinutes}`);

const totalHours = (totalMinutes - remainingMinutes) / 60;

console.log(`The value of totalHours is: ${totalHours}`);

const remainingHours = totalHours % 24;

console.log(`The value of remainingHours is: ${remainingHours}`);

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;

console.log(`The value of result is: ${result}`);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?

// Answers:

// a) In the program there are 7 variable declarations.

// b) There are no function calls.

// c) The expression movieLength % 60 represents the calculation of the remainder of dividing the value of movieLength variable by 60.

// d) The expression assigned to totalMinutes in line 4,first subtracts the value of the variable remainingSeconds from the value of the variable movieLength.
// Then, it calculates the total number of minutes in the movieLength variable by dividing it by 60 to convert the amount from seconds to minutes.

// e) The variable result represents a formatted string to show the entire time duration of the movie. A better name for the variable could be timeDurationDisplay.

// f) The program will work for many values of movieLength,
// but issues can arise with very large values (equals and greater than 86400 seconds), negative values, and non-integer numbers (decimals and fractions).
// To resolve these concerns, we can consider introducing a format that includes days for large values,
// Using the Math.abs() method to handle negative values and ensure positive durations,
// and accommodating non-integer values in the code to ensure accurate results - Math.round() or Math.floor().
