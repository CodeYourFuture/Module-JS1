// Implement a function repeat

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

function repeat(str, count) {
  if (count < 0) {
    throw new Error("Negative counts are not valid.");
  } else if (count === 0) {
    return "";
  } else if (count === 1) {
    return str;
  } else {
    return str.repeat(count);
  }
}
// The function 'repeat' takes a string and a count as inputs. It checks if the count is negative; if it is, an error is returned. If the count is zero, an empty string is returned. When the count is one, the original string is returned. If the count is greater than one, the function repeats the string 'count' times and returns the resulting concatenated string.

test("Managing text repetition with error control.", function () {
  expect(repeat("Cyf", 3)).toBe("CyfCyfCyf");
  expect(repeat("Manchester", 1)).toBe("Manchester");
  expect(repeat("istanbul", 0)).toBe("");
  expect(repeat("London", 2)).toBe("LondonLondon");
  expect(() => repeat("Moracco", -1)).toThrow("Negative counts are not valid.");
});
// toThrow is used here to verify that the function actually throws an error when given a negative count, and it checks if the error message matches the expected one.
