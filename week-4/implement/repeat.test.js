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

function repeat(str, num) {
    if (num == 0) {
        return "";
    }
    if (num < 0) {
        return "Not valid number";
    }
    if (num ==1) {
        return str;
    }
    const newStr = str.repeat(num);;
    return newStr;
}

test("Check if number is prime", function () {
    const currentOutput = repeat("hello", 3);
    const targetOutput = "hellohellohello";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const currentOutput = repeat("adniya", 1);
    const targetOutput = "adniya";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const currentOutput = repeat("hI", 5);
    const targetOutput = "hIhIhIhIhI";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const currentOutput = repeat("hI", 0);
    const targetOutput = "";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const currentOutput = repeat("hI", -4);
    const targetOutput = "Not valid number";
    expect(currentOutput).toBe(targetOutput);
});