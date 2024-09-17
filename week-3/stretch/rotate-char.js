// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for weak text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

function isLetterOrNumber(char) {
  return /[a-zA-Z0-9]/.test(char); //check if input is a valid letter or number
}

function rotateCharacter(char, shift) {
  if (
    char.length === 1 &&
    isLetterOrNumber(char) &&
    typeof shift == "number" &&
    shift >= 0
  ) {
    if (
      char.charCodeAt() > 47 &&
      char.charCodeAt() < 58 /* check if input is a valid number */
    ) {
      return char;
    } else {
      const isUpperCase = /[A-Z]/.test(char);
      const charUnicode = char.toUpperCase().charCodeAt();
      const realShift = shift >= 26 ? shift % 26 : shift;
      const shiftedCharUnicode = charUnicode + realShift;
      const shiftedChar =
        shiftedCharUnicode > 90
          ? String.fromCharCode(shiftedCharUnicode - 26)
          : String.fromCharCode(shiftedCharUnicode);

      return isUpperCase
        ? shiftedChar.toUpperCase()
        : shiftedChar.toLowerCase();
    }
  } else {
    return "Please, insert a valid value. The character should be just 1 letter or 1 positive number, and the shift should be a positive number.";
  }
}

// Acceptance criteria:

// Given a character (char) and a shift value (shift),
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
console.log(rotateCharacter("a", 3), "expected d"); // Output: "d"
console.log(rotateCharacter("f", 1), "expected g"); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
console.log(rotateCharacter("A", 3), "expected D"); // Output: "D"
console.log(rotateCharacter("F", 1), "expected G"); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character (char) that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
console.log(rotateCharacter("7", 5), "expected 7"); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
console.log(rotateCharacter("z", 1), "expected a"); // Output: "a" (unchanged, not a letter)
