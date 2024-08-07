// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

function repeat(str, count) {
  let repeatedStr = "";
  if (count === 0) {
    return "";
  } else if (count < 0) {
    return "negative counts are not valid";
  } else if (count > 0) {
    for (let i = count; i > 0; i--) {
      repeatedStr += str;
    }
    return repeatedStr;
  }
}

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("case: repeat String", function () {
  const str = "kaya";
  const count = 6;
  const currentOutput = repeat(str, count);
  const targetOutput = "kayakayakayakayakayakaya";

  expect(currentOutput).toBe(targetOutput);
});

// c:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

test("case: handle Count of 1", function () {
  const str = "kaya";
  const count = 1;
  const currentOutput = repeat(str, count);
  const targetOutput = "kaya";

  expect(currentOutput).toBe(targetOutput);
});

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

test("case: handle Count of 0", function () {
  const str = "kaya";
  const count = 0;
  const currentOutput = repeat(str, count);
  const targetOutput = "";

  expect(currentOutput).toBe(targetOutput);
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

test("case: Negative Count", function () {
  const str = "kaya";
  const count = -1;
  const currentOutput = repeat(str, count);
  const targetOutput = "negative counts are not valid";

  expect(currentOutput).toBe(targetOutput);
});
