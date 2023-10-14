function isValidPassword(password, passwords) {
    // Check the length of the password
    if (password.length < 5) {
       return false;
    }
   
    // Check for the presence of uppercase letters
    if (!/[A-Z]/.test(password)) {
       return false;
    }
   
    // Check for the presence of lowercase letters
    if (!/[a-z]/.test(password)) {
       return false;
    }
   
    // Check for the presence of numbers
    if (!/[0-9]/.test(password)) {
       return false;
    }
   
    // Check for the presence of non-alphanumeric symbols
    if (!/[!#$%&*.]/.test(password)) {
       return false;
    }
   
    // Check if the password is in the passwords array
    if (passwords.includes(password)) {
       return false;
    }
   
    // If all the conditions are met, the password is valid
    return true;
   }
   
   // Test cases
   console.log(isValidPassword("Password1!", ["Password1!", "Password2@", "Password3#"])); // false
   console.log(isValidPassword("Password2@", ["Password1!", "Password2@", "Password3#"])); // false
   console.log(isValidPassword("Password3#", ["Password1!", "Password2@", "Password3#"])); // false
   console.log(isValidPassword("Password4$", ["Password1!", "Password2@", "Password3#"])); // true
   console.log(isValidPassword("Password5&", ["Password1!", "Password2@", "Password3#"])); // true