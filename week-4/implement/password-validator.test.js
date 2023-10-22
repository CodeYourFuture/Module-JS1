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
- Must not be any previous password in the passwords array. ???

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function passwordValidator(password) {
  const uppercaseChars = /[A-Z]/;
  const lowercaseChars = /[a-z]/;
  const numberChar = /[0-9]/;
  const nonArithmeticChars = /[$,./-@*]/;

  for (let i = 0; i <= password.length; i++) {
    if (
      uppercaseChars.test(password) &&
      lowercaseChars.test(password) &&
      numberChar.test(password) &&
      nonArithmeticChars.test(password)
    ) {
      return "Password was successfully created!";
    }
  }
  return "Password was unsuccessful, it did not meet the requirements!";
}

test("checks if password meets requirements", function () {
  expect(passwordValidator("Marcus")).toBe(
    "Password was unsuccessful, it did not meet the requirements!"
  );
});

test("checks if password meets requirements", function () {
  expect(passwordValidator("Marcus2608/")).toBe(
    "Password was successfully created!"
  );
});

test("checks if password meets requirements", function () {
  expect(passwordValidator("12345678910")).toBe(
    "Password was unsuccessful, it did not meet the requirements!"
  );
});
