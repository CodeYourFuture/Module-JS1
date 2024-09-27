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

const repeat = require("./repeat");

test("When the repeat function is called with positive integer inputs, then it should return  a new string containing the repeated str values.", () => {

    expect(repeat("df", 3)).toBe("dfdfdf");
})


test("When the repeat function is called with 1 inputs, then it should return the original str without repetition .", () => {

    expect(repeat("df", 1)).toBe("df");
})

test("When the repeat function is called with o inputs, then it should return empty string.", () => {

    expect(repeat("eff", 0)).toBe("");
})

test("When the repeat function is called with negative inputs, then it should return negative counts are not valid .", () => {

    expect(repeat("nfhtt", -1)).toBe("negative counts are not valid");
})