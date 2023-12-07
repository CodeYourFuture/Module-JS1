// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count consecutive occurrences of char (e.g., 'a' appears five times in 'aaaaa').
/*
function countChar(str, char) {
  return str.split(char).length - 1;
}

const stringInput = "Harry Potter and the Philosopher's Stone";
const countCharacter = "o";
const result = countChar(stringInput, countCharacter);

console.log(
  `The character '${countCharacter}' appears ${result} times consecutively in '${stringInput}'.`
);*/

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

/*function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
    // checks if the current character in the string (str[i]) is equal to the character we’re searching for (char), and if true it increments the count variable by 1. This keeps happening for every letter in string. if not shows zero
  }
  return count;
}

const StringInput = "Harry Potter and the Philosopher's Stone";
const countCharacter = "e";

console.log(
  `The character '${countCharacter}' appears ${countChar(
    StringInput,
    countCharacter
  )} times in "${StringInput}".`
);
// Output: The character 'e' appears 4 times in "Harry Potter and the Philosopher's Stone".

const noOccurrenceChar = "z";

console.log(
  `The character '${noOccurrenceChar}' appears ${countChar(
    StringInput,
    noOccurrenceChar
  )} times in "${StringInput}".`
);
// Output The character 'z' appears 0 times in "Harry Potter and the Philosopher's Stone".  */

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
const stringInput = "Harry Potter and the Philosopher's Stone";

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
//const stringInput = "Harry Potter and the Philosopher's Stone"; stringInput gives a redeclaration error in here. I cleared it and still working
test("countChar - character 'e'", () => {
  const countCharacter = "e";
  expect(countChar(stringInput, countCharacter)).toBe(4);
});

test("countChar - character 'z'", () => {
  const noOccurrenceChar = "z";
  expect(countChar(stringInput, noOccurrenceChar)).toBe(0);
});
