let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string in upper case to form the user's initials
// Log the variable in each case

const firstNameInitial = firstName.charAt(0).toUpperCase();

console.log(firstNameInitial);

const middleNameInitial = middleName.charAt(0).toUpperCase();

console.log(middleNameInitial);

const lastNameInitial = lastName.charAt(0).toUpperCase();

console.log(lastNameInitial);

const initials =
  firstNameInitial + "." + middleNameInitial + "." + lastNameInitial + ".";

console.log(initials);
