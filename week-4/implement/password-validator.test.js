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

function validatePassword(password, previousPasswords) {
  return (
    password.length >= 5 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) && // checks if the password contains at least one digit (0-9).
    /[!#$%.&*]/.test(password) && //if the password contains at least one of the specified symbols
    !previousPasswords.includes(password) // if the password is not present in the previousPasswords
  );
}

test("Validating passwords against prior usage", () => {
  const previousPasswords = ["greenworld39", "mimoza@!09", "whoIsThere?"];

  // valid password  meets all criteria
  expect(validatePassword("GreatPassword!1", previousPasswords)).toBe(true);

  //  previousPasswords
  expect(validatePassword("mimoza@!09", previousPasswords)).toBe(false);

  // invalid password. doesn't meet criteria,
  expect(validatePassword("weak", previousPasswords)).toBe(false);

  // invalid password, doesn't have special character
  expect(validatePassword("Weak12", previousPasswords)).toBe(false);
});
