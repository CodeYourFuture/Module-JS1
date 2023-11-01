let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string in upper case to form the user's initials
// Log the variable in each case

let firstInitials = firstName.substring(0, 3).toUpperCase();
let middleInitials = middleName.substring(0, 3).toUpperCase();
let lastInitials = lastName.substring(0, 3).toUpperCase();

let initials = firstInitials + middleInitials + lastInitials;

console.log(initials);
