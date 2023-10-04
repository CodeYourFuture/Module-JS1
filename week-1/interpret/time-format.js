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
// 7 variable decleration

// b) How many function calls are there?
//nothing , there/s not any function in this code .

// c) Using documentation, explain what the expression movieLength % 60 represents
//It shows the remaining value of the division of `movieLength` by 60. '%' is called the modulus 
// arithmetic operator, which calculates the remainder of a division.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// line 4 is calculating number of minutes in the `movielength` . it subtract whole the seconds for remained seconds to get a dividable
//number by 60 and give us back the whole minutes in the movieLength.
//for example if we had movielength=85 => totalMinutes=(85-25)/60 == 1


// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it returnes the movieLenght in a proper understanable format of "HH:MM:SS" which HH is for hours ,MM for minutes and SS for seconds.
//movieLengthFormatted would be a better name for it .

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
