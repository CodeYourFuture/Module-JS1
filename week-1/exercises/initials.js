let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// create the initials together
let initials =
  "First Name Initials: " +
  firstName.slice(0, 3).toUpperCase() +
  "\n" +
  "Middle Name Initials: " +
  middleName.slice(0, 3).toUpperCase() +
  "\n" +
  "Last Name Initials: " +
  lastName.slice(0, 3).toUpperCase();

// note to myself
/* 
another way 
let initials = `First Name Initials: ${firstName.slice(0, 3).toUpperCase()}\n
                Middle Name Initials: ${middleName.slice(0, 3).toUpperCase()}\n
                Last Name Initials: ${lastName.slice(0, 3).toUpperCase()}`;
*/
// Log the initials
console.log(initials);

// Declare a variable called initials that stores the first 3 characters of each string in upper case
// Log the variable in each case
