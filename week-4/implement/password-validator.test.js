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
    // return "Oops! Make it up to or more than 5 characters.";
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
}

test("This is to check the validity of user's password", () => {
  expect(validPassword("Olamide*6732")).toBe("Success!");
});
