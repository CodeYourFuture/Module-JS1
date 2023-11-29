// implement a function countChar that counts the number of times a character occurs in a string

//const { default: test } = require("node:test");

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count consecutive occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

/////....................................................................................................
//ANSWER

// count.js
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
      while (str[i + 1] === char) {
        i++;
        count++;
      }
    }
  }

  return count;
}


test('counts occurrences of a character in a string', () => {
  const inputString = "aaaaaaa";
  const targetChar = "a";
  const currentOutput = countChar(inputString, targetChar);
  const targetOutput = 7;
  expect(currentOutput).toBe(targetOutput);
});



