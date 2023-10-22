// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

function timesToRepeatString(str, times) {
  if (times === 0) {
    return " ";
  } else if (times >= 1) {
    return str.repeat(times);
  } else if (times < 0) {
    return "Sorry, you cannot return a negative number for an amount of times to display a string.";
  }
}

test("returns a string the specified amount of times", function () {
  expect(timesToRepeatString("Marcus ", 2)).toBe("Marcus Marcus ");
});

test("returns a string the specified amount of times", function () {
  expect(timesToRepeatString("Marcus ", 1)).toBe("Marcus ");
});

test("returns a string the specified amount of times", function () {
  expect(timesToRepeatString("Marcus ", 0)).toBe(" ");
});

test("returns a string the specified amount of times", function () {
  expect(timesToRepeatString("Marcus ", -6)).toBe(
    "Sorry, you cannot return a negative number for an amount of times to display a string."
  );
});

console.log(timesToRepeatString("Marcus ", 6));
console.log(timesToRepeatString("Marcus ", 0));
console.log(timesToRepeatString("Marcus ", -1));

// test("Repeats string by specified amount of times", function () {
//   expect(timesToRepeatString(2).toBe("Marcus Marcus"));
// });

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
