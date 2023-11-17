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
// Function to check if a password is valid
function isPasswordValid(password, previousPasswords) {
  // Step 1: if the password has less than 5 characters
  if (password.length < 5) {
    return false;
  }

  // Step 2: if the password has at least one uppercase
  let hasUppercase = false;
  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
      break;
    }
  }

  if (!hasUppercase) {
    return false;
  }

  // Step 3: if the password has at least one lowercase letter
  let hasLowercase = false;
  for (let char of password) {
    if (char >= "a" && char <= "z") {
      hasLowercase = true;
      break;
    }
  }

  if (!hasLowercase) {
    return false;
  }

  // Step 4: if the password has at least one number
  let hasNumber = false;
  for (let char of password) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
      break;
    }
  }

  if (!hasNumber) {
    return false;
  }

  // Step 5: if the password has at least one of these non-alphanumeric symbols
  const allowedSymbols = [
    "!",
    "#",
    "$",
    "%",
    ".",
    "*",
    "&",
    "?",
    "~",
    "-",
    "+",
    "=",
    "<",
    ">",
    "/",
    "£",
    ";",
    "@",
  ];
  let hasSymbol = false;
  for (let char of password) {
    if (allowedSymbols.includes(char)) {
      hasSymbol = true;
      break;
    }
  }

  if (!hasSymbol) {
    return false;
  }

  // Step 6: if the password is not in the previous passwords array
  if (previousPasswords.includes(password)) {
    return false;
  }

  // If all conditions is pass/true, the password is valid
  return true;
}

// const password = "CYF@test3";
// const previousPasswords = ["Password@123", "SecurePwd!"];

// const isValid = isPasswordValid(password, previousPasswords);
// console.log(isValid);

test("testing a givin password is a valid password or is an existing password", () => {
  expect(isPasswordValid("CYF@test3", ["Password123", "SecurePwd!"])).toBe(
    true
  );
  expect(isPasswordValid("1234567", ["Password123", "SecurePwd!"])).toBe(false);
  expect(isPasswordValid("Password@123", ["Password123", "SecurePwd!"])).toBe(
    false
  );
  expect(isPasswordValid("Abdi1&Ali", ["Password123", "SecurePwd!"])).toBe(
    true
  );
  expect(isPasswordValid("Ab1$", ["Password123", "SecurePwd!"])).toBe(false);
});
