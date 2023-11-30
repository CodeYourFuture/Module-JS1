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

function repeatString(str, count) {
  if (count < 0) {
    throw Error("Negative counts are not valid..");
  }
  let index = 1;
  let output = "";

  while (index <= count) {
    output = `${output}${str}`;
    // output = output + str; another way
    index++;
  }
  return output;
}

test("works for case: repeat String", function () {
  expect(repeatString("hey", 3)).toBe("heyheyhey");
});

test("works case: handle count of 1", function () {
  expect(repeatString("hey", 1)).toBe("hey");
});

test("works case: handle count of 0", function () {
  expect(repeatString("hey", 0)).toBe("");
});

test("works case: negative count", function () {
  const targetOutput = "Negative counts are not valid..";
  const str = "hey";
  const count = -3;

  const f = function () {
    repeatString(str, count);
  };

  expect(f).toThrow(targetOutput);
});
