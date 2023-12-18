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
  if (typeof str !== "string") {
    throw new Error("The first parameter must be a string!");
  }

  if (typeof count !== "number") {
    throw new Error("The second parameter must be a number!");
  }

  if (Number.isInteger(count) !== true || count < 0) {
    throw new Error("Count must be a positive integer!");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

test("repeats given string count times", function () {
  expect(repeat("Hi", 3)).toBe("HiHiHi");
  expect(repeat("Hi", 1)).toBe("Hi");
  expect(repeat("Hi", 0)).toBe("");
  expect(() => repeat(3, 3)).toThrow("The first parameter must be a string!");
  expect(() => repeat("Hi", true)).toThrow(
    "The second parameter must be a number!"
  );
  expect(() => repeat("Hi", -3)).toThrow("Count must be a positive integer!");
  expect(() => repeat("Hi", 1.5)).toThrow("Count must be a positive integer!");
});

// console.log(repeat("Hi", 3));
// console.log(repeat("Hi", 1));
// console.log(repeat("Hi", 0));
// console.log(repeat("Hi", -3));
// console.log(repeat("Hi", 1.5));
// console.log(repeat(3, 3));
// console.log(repeat("Hi", true));
