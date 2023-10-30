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
// function passwordValidator(password) {
//   let validChar = /^[A-Za-z0-9!$%.&*]+$/.test(password);
//   let gotUpper = /[A-Z]/.test(password);
//   let gotLower = /[a-z]/.test(password);
//   let gotDigit = /[0-9]/.test(password);
//   let gotSymbol = /[!$%&*.#]/.test(password);
//   let passwordLength = password.length;
//   const passwordHolder = [];
//   let uinquePassword = !passwordHolder.includes(password);
//   if (
//     typeof password === "string" &&
//     passwordLength > 5 &&
//     validChar &&
//     uinquePassword &&
//     gotUpper &&
//     gotLower &&
//     gotDigit &&
//     gotSymbol
//   ) {
//     passwordHolder.push(password);
//     return true;
//   } else return false;
// }

// Declaring passwordHolder outside the function to retain its value across function calls
const passwordHolder = [];

function passwordValidator(password) {
  let validChar = /^[A-Za-z0-9!$%.&*]+$/.test(password);
  let gotUpper = /[A-Z]/.test(password);
  let gotLower = /[a-z]/.test(password);
  let gotDigit = /[0-9]/.test(password);
  let gotSymbol = /[!$%&*.#]/.test(password);
  let passwordLength = password.length;

  let uniquePassword = !passwordHolder.includes(password);

  if (
    typeof password === "string" &&
    passwordLength >= 5 &&
    validChar &&
    uniquePassword &&
    gotUpper &&
    gotLower &&
    gotDigit &&
    gotSymbol
  ) {
    passwordHolder.push(password);
    return true;
  } else {
    return false;
  }
}

console.log(passwordValidator("12345bA!"));
console.log(passwordValidator("123Bb"));
console.log(passwordValidator("1231213bA"));
console.log(passwordValidator("1231213bA."));
console.log(passwordValidator("bAh123*"));
