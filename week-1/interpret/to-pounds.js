const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// to add commas as thousands separators based on your system's locale settings 'const pounds = Math.floor(penceStringWithoutTrailingP / 100).toLocaleString();'

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
/*
Let's break down each line of the program step by step:

const penceString = "399p";
This line initializes a constant variable named penceString with the value "399p". 
It represents a string that presumably denotes a price in pence.

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
Here, we create a new variable called penceStringWithoutTrailingP. 
It's derived from penceString by using the substring method to remove the last character, 
which is the letter 'p'. So, penceStringWithoutTrailingP becomes "399".

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
This line creates a new variable called paddedPenceNumberString. 
It takes the penceStringWithoutTrailingP and pads it with leading zeros to make sure 
it has a total length of 3 characters. In this case, it adds one zero to the beginning, 
so paddedPenceNumberString becomes "399".

const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
Here, we create a variable named pounds. 
It's extracted from paddedPenceNumberString by taking the characters from the start up 
to the last two characters. So, pounds becomes "3".

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
This line generates the variable pence. 
It's derived from paddedPenceNumberString by taking the last two characters, 
which are "99". Then, it uses padEnd to ensure that pence always has a length of 2 characters 
by adding zeros to the end, resulting in "99".

console.log(£${pounds}.${pence});
Finally, this line prints out the price in a pounds and pence format. I
t uses template literals to concatenate the pounds and pence variables, separated by a dot, 
and adds the pound symbol '£' at the beginning. 
So, it would display "£3.99" based on the input string "399p".


Overall, this program takes a string representing a price in pence, 
extracts the pounds and pence parts, and formats them as a price in pounds and pence 
with the pound symbol.

Stretch
// to add commas as thousands separators based on your system's locale settings 'const pounds = Math.floor(penceStringWithoutTrailingP / 100).toLocaleString();'
if the penceString = thousands or more 
*/
