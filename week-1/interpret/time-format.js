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
// a- There are 7 variable declarations in this program.

// b) How many function calls are there?
// b- There are no function calls in this program other than console.log(result);.

// c) Using documentation, explain what the expression movieLength % 60 represents
/* c- The expression movieLength % 60 represents the remainder of the division of movieLength by 60. 
      In other words, it represents the number of seconds in the movie that are not divisible by 60. 
      This is useful for calculating the number of minutes and seconds in the movie, as well as 
      the number of hours if the movie is longer than an hour.
*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* d- The expression assigned to totalMinutes on line 4 is:
      (movieLength - remainingSeconds) / 60
      This expression calculates the total number of minutes in the movie, excluding the seconds. 
      It does this by subtracting the number of seconds remaining from the total length of 
      the movie, and then dividing by 60.
 */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* e- The variable result represents the remaining time in the movie, 
      expressed in hours, minutes, and seconds. It is calculated by concatenating the values of 
      remainingHours, remainingMinutes, and remainingSeconds with colons in between.
      A better name for the variable result could be movieDuration or videoDuration. 
      These names are more descriptive of what the variable actually represents.
*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* f- Yes, the code will work for all values of movieLength if it's less than 24 hours. 
      This is because the expressions used to calculate the remaining time in the movie are all 
      valid if the value of movieLength is less than 24. because of the line 
      const remainingHours = totalHours % 24;. 
      This line of code calculates the remainder of the division of totalHours by 24. 
      This means that remainingHours will always be between 0 and 23.
      If the movie is longer than 24 hours, then totalHours will be greater than 24. 
      This means that remainingHours will be equal to 0. 
      This is why the code will not display the remaining time if the movie is longer than 24 hours.

      For example, if we set movieLength to 3600 seconds (1 hour), then the following values 
      would be calculated:
      remainingSeconds = 0
      totalMinutes = 60
      remainingMinutes = 0
      totalHours = 1
      remainingHours = 1
      The value of result would then be 1:0:0, which is the correct remaining time in the movie.
      
      If we set movieLength to 86400 seconds (24 hours), then the following values would be calculated:
      remainingSeconds = 0
      totalMinutes = 1440
      remainingMinutes = 0
      totalHours = 24
      remainingHours = 0
      This is because the code calculates the remaining time in seconds, minutes, and hours, 
      but the remainingHours variable is always calculated by taking the remainder of the division 
      of totalHours by 24. This means that the remainingHours variable will always be between 0 and 23.
      So, even though the movie is 24 hours long, the code will display the remaining time as 
      if the movie were 0 hours long. The value of result would then be 0:0:0

      If we set movieLength to 90000 seconds (25 hours), then the following values would be calculated:
      remainingSeconds = 0
      totalMinutes = 1500
      remainingMinutes = 0
      totalHours = 25
      remainingHours = 1
      So, even though the movie is 25 hours long, the code will display the remaining time as if 
      the movie were 1 hour long. The value of result would then be 1:0:0
*/
