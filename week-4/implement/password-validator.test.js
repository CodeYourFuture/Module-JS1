/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/


// Defines a function named isPasswordValid that takes a parameter password.
function isPasswordValid(password) {
  // Step 1: Check if the password has at least 5 characters
  if (password.length < 5) {
    return false;
  }
//If the length of the password is less than 5, 
//the function returns false, indicating that the password is not valid.
  
  return true;
  // If the password passes all the checks, return true
}
// If the password passes all the checks (we only have one check for now), 
// the function returns true.

// Test case
const testPassword = "abcde";
const result = isPasswordValid(testPassword);
console.log(result); // Output: false (because "abcde" has less than 5 characters)
