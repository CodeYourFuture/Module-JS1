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

function isPasswordValid(str) {
  let points = 6;

  if (str.length < 5) {
    points--;
  }

  if (str.toUpperCase() === str) {
    points--;
  }

  if (str.toLowerCase() === str) {
    points--;
  }

  for (let char of str) {
    if (isNaN(Number(char))) {
      points--;
    }
  }

  if (
    !str.includes("!") &&
    !str.includes("#") &&
    !str.includes("$") &&
    !str.includes("%") &&
    !str.includes(".") &&
    !str.includes("*") &&
    !str.includes("&")
  ) {
    points--;
  }
  if (points != 5) {
    return false;
  } else {
    return true;
  }
}

test("Have at least 5 characters", function () {
  const input = "Aa1.";
  const currentOutput = isPasswordValid(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("Have at least one English uppercase letter (A-Z)", function () {
  const input = "aaa1.";
  const currentOutput = isPasswordValid(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("Have at least one English lowercase letter (a-z)", function () {
  const input = "AAA1.";
  const currentOutput = isPasswordValid(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("Have at least one number (0-9)", function () {
  const input = "Aaaa.";
  const currentOutput = isPasswordValid(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test(
  "Have at least one non-alphanumeric symbol (!, #, $, %, ., *, " & ")",
  function () {
    const input = "Aaaa1";
    const currentOutput = isPasswordValid(input);
    const targetOutput = false;

    expect(currentOutput).toBe(targetOutput);
  }
);
