let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first 3 characters of each string in upper case
// Log the variable in each case
let initials =
  firstName.substring(0, 3).toUpperCase() +
  middleName.substring(0, 3).toUpperCase() +
  lastName.substring(0, 3).toUpperCase();

console.log(initials.substring(0, 3));
console.log(initials.substring(3, 6));
console.log(initials.slice(-3));
