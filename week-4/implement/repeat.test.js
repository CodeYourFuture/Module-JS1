// Implement a function repeat

const { default: expect } = require("expect");

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeatString(str, num) {
  if (num < 0) {
    return "negative count is not valid";
  }
  let repeatedString = str.repeat(num);
  if (num === 0) {
    return "";
  }
  if (num === 1) {
    return str;
  } else return repeatedString;
}

test("Check if the string is being repeated correctly", function () {
  expect(repeatString("Ali", 2)).toBe("AliAli");
  expect(repeatString("Ali", 5)).toBe("AliAliAliAliAli");
  expect(repeatString("Ali", 0)).toBe("");
  expect(repeatString("Ali", 1)).toBe("Ali");
  expect(repeatString("Ali", -2)).toBe("negative count is not valid");
});
