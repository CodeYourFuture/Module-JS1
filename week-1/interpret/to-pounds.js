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




const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//399

console.log(`£${pounds}.${pence}`);


/*
line 1) This line initializes a constant variable penceString and assigns it the value "399p", which represents a price in pence.

line 3 ) This line creates a new string penceStringWithoutTrailingP by using the substring method to remove the last character (which is 'p') from the penceString. The resulting string is "399".

line 8)Here, paddedPenceNumberString is created by using the padStart method. This method pads the penceStringWithoutTrailingP with zeros at the beginning to make sure it has a minimum length of 3 characters. Since "399" already has 3 characters, no padding is added, and the result is still "399".

line 9)This line extracts the pound portion of the paddedPenceNumberString. It uses substring to take all characters from the start up to the third-to-last character, effectively removing the last two characters. In this case, it extracts "3".

line 17)Here, pence is created by extracting the pence portion of the paddedPenceNumberString. It uses substring to get the last two characters, which are "99". Then, it uses padEnd to ensure that the pence string has a length of 2 characters by adding zeros if necessary. So, "99" remains unchanged.

line 23) 
this line prints the price in pounds and pence to the console using template literals. It combines the pounds and pence variables to create a string in the format £3.99, which is then displayed in the console.


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
