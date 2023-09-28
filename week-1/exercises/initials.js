let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";
let initials = `${firstName.substring(0, 3).toUpperCase()}\n${middleName
  .substring(0, 3)
  .toUpperCase()}\n${lastName.substring(0, 3).toUpperCase()}`;

// Declare a variable called initials that stores the first 3 characters of each string in upper case
// Log the variable in each case
console.log(initials);
