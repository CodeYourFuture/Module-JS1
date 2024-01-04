// implement a function countChar that counts the number of times a character occurs in a string

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

function countChar(str, char) {
  let count = 0;

  //   in case of not case sensitive strings
  //   str = str.toUpperCase();
  //   char = char.toUpperCase();

  while (str.includes(char)) {
    count++;
    str = str.replace(char, "");
  }
  return count;
}

test("checks for how many specific char a string has", function () {
  const inputStr = "code your future";
  const inputChar = "o";
  const currentOutput = countChar(inputStr, inputChar);
  const targetOutput = 2;

  expect(currentOutput).toBe(targetOutput);
});

test("checks for how many specific char a string has", function () {
  const inputStr = "Fikret Ellek";
  const inputChar = "E";
  const currentOutput = countChar(inputStr, inputChar);
  const targetOutput = 1;

  expect(currentOutput).toBe(targetOutput);
});

test("checks for how many specific char a string has", function () {
  const inputStr = "I am having a great time";
  const inputChar = "a";
  const currentOutput = countChar(inputStr, inputChar);
  const targetOutput = 4;

  expect(currentOutput).toBe(targetOutput);
});
