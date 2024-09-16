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

//Defines a function named repeat that takes two parameters, str and count:
function repeat(str, count) {
  // Case: Negative Count
  if (count < 0) {
    throw new Error("Negative count is not valid");
  }
  //If the count is negative, it throws an error as negative counts are not valid.

  // Case: Handle Count of 0
  if (count === 0) {
    return ""; 
    //If the count is 0, it returns an empty string.
  }


  // Case: Handle Count of 1
  if (count === 1) {
    return str;
     //If the count is 1, it returns the original string without repetition.
  }

  // Case: Repeat String
  return str.repeat(count);
  //Uses the repeat method to repeat the string count times and returns the result.
}

// Test Case 1: Repeat String
const result1 = repeat("abc", 3);
console.log(result1); // Output: "abcabcabc"

// Test Case 2: Handle Count of 1
const result2 = repeat("xyz", 1);
console.log(result2); // Output: "xyz"

// Test Case 3: Handle Count of 0
const result3 = repeat("123", 0);
console.log(result3); // Output: ""

// Test Case 4: Negative Count (uncomment the line below to test)
// repeat("test", -2);
