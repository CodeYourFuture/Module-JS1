let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first 3 characters of each string in upper case
// Log the variable in each case

const initials = firstName.slice(0, 3).toUpperCase() + " " + middleName.slice(0, 3).toUpperCase() + " " + lastName.slice(0, 3).toUpperCase();
console.log(initials);
