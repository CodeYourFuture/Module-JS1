// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character (char) and a shift value (shift),
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "f"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character (char) that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
console.log(rotateCharacter("z", 1)); // Output: "a" (unchanged, not a letter)


function rotateCharacter(char, shift) {
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerShiftIndex = alphaLower.indexOf(char) + shift;
  const upperShiftIndex = alphaUpper.indexOf(char) + shift;
  if (alphaLower.includes(char)) {
    if (lowerShiftIndex >= 26) {
      return alphaLower[lowerShiftIndex - 26];
    }
    return alphaLower[lowerShiftIndex];
  } else if (alphaUpper.includes(char)) {
    if (upperShiftIndex >= 26) {
      return alphaUpper[upperShiftIndex - 26];
    }
    return alphaUpper[upperShiftIndex];
  }
  return char;
}

const currentOutput = rotateCharacter("w", 5);
const targetOutput = "b";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = rotateCharacter("a", 3);
const targetOutput2 = "d";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput3 = rotateCharacter("f", 1);
const targetOutput3 = "g";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput4 = rotateCharacter("A", 3);
const targetOutput4 = "D";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput5 = rotateCharacter("F", 1);
const targetOutput5 = "G";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput6 = rotateCharacter("7", 5);
const targetOutput6 = "7";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput7 = rotateCharacter("z", 1);
const targetOutput7 = "a";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
