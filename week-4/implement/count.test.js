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
  const charsArray = str.split("");
  const occurrences = charsArray.filter((currentChar) => {
    return currentChar === char;
  });
  return occurrences.length;
}

test("counts the number of times a character occurs in a string", function () {
  expect(countChar("aaaaa", "a")).toBe(5);
  expect(countChar("apple", "b")).toBe(0);
  expect(countChar("book", "o")).toBe(2);
  expect(countChar("hello", "e")).toBe(1);
  expect(countChar("world", "z")).toBe(0);
});
