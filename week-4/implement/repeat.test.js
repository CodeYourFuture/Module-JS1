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
  if (typeof str !== "string" || typeof count !== "number") {
    return `Invalid input types. Please make this ${str} a string if not and this ${count} a number if not.`;
  }

  if (count < 0) {
    return "Negative count is not valid";
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  return result;
}

// console.log(repeat("test", 3));

test("Valid input", () => {
  expect(repeat("test", 3)).toBe("TestTestTest");
  expect(repeat(123, 3)).toBe(
    "Invalid input types. Please make this 123 a string if not and this 3 a number if not."
  );
  expect(repeat("test", -1)).toBe("Negative count is not valid");
});
