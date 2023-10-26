// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

function countChar(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return `${char} appeared ${count} time${
    count > 1 ? "s" : ""
  } in the word ${str}`;
}


// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("to count the number of times a letter appears in a given word", () => {
  expect(countChar("babbab", "b")).toBe(
    "b appeared 4 times in the word babbab"
  );
  expect(countChar("excellent", "E")).toBe(
    "E appeared 0 time in the word excellent"
  );
    expect(countChar("Magnificent", "M")).toBe(
      "M appeared 1 time in the word Magnificent"
    );
});
