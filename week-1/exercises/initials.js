let firstName = "creola";
let middleName = "katherine";
let lastName = "johnson";

// Declare a variable called initials that stores the first character of each string in upper case to form the user's initials
// Log the variable in each case
let firstInitial = firstName.charAt(0).toUpperCase();
console.log(firstInitial);
let middleInitial = middleName.charAt(0).toUpperCase();
console.log(middleInitial);
let lastInitial = lastName.charAt(0).toUpperCase();
console.log(lastInitial);
console.log(`${firstInitial}.${middleInitial}.${lastInitial} `);
