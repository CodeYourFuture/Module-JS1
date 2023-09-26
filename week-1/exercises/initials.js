let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Extract the first 3 characters from each name and convert them to uppercase
let firstInitials = firstName.slice(0, 3).toUpperCase();
let middleInitials = middleName.slice(0, 3).toUpperCase();
let lastInitials = lastName.slice(0, 3).toUpperCase();

// Concatenate the initials together
let initials = firstInitials + middleInitials + lastInitials;

// Log the initials for each name
console.log("First Name Initials:", firstInitials);
console.log("Middle Name Initials:", middleInitials);
console.log("Last Name Initials:", lastInitials);

// Declare a variable called initials that stores the first 3 characters of each string in upper case
// Log the variable in each case
