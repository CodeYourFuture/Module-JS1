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

let myPasswords = [];

function validPassword(input) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const alphaSymbol = "!#$%.*&";

  let validLength = false;
  let isAlphaNumericSymbol = false;
  let isUpper = false;
  let isNum = false;
  let isLower = false;

  if (input.length >= 5) {
    validLength = true;
  }
  for (index = 0; index < input.length; index++) {
    if (upper.includes(input[index])) {
      isUpper = true;
    }
  }
  for (index = 0; index < input.length; index++) {
    if (lower.includes(input[index])) {
      isLower = true;
    }
  }
  for (index = 0; index < input.length; index++) {
    if (num.includes(input[index])) {
      isNum = true;
    }
  }
  for (index = 0; index < input.length; index++) {
    if (alphaSymbol.includes(input[index])) {
      isAlphaNumericSymbol = true;
    }
  }
  if (validLength && isUpper && isLower && isNum && isAlphaNumericSymbol) {
    if (!myPasswords.includes(input)) {
      myPasswords.push(input);
      return "Success!";
    }
    return "Oops! password has been used.";
  }
  return "Please check your password";
}

test("This is to check the validity of user's password", () => {
  expect(validPassword("Olamide*6732")).toBe("Success!");
  expect(validPassword("OlamideAra*6732")).toBe("Success!");
  expect(validPassword("ladera*6732")).toBe("Please check your password");
  expect(validPassword("OlamideAra*6732")).toBe(
    "Oops! password has been used."
  );
  expect(validPassword("Or*2")).toBe("Please check your password");
});