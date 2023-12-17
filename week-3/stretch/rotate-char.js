// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for weak text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character (char) and a shift value (shift),
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.

function rotateCharacter(char, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const rotatedIndex = (alphabet.indexOf(char) + shift) % 26;
  return alphabet[rotatedIndex];
}

console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"
console.log(rotateCharacter("x", 5)); // Output: "c"
console.log(rotateCharacter("z", 10)); // Output: "j"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.

// The function takes a character (char) and a shift value (shift)

function rotateCharacter(char, shift) {
  const rotate = function (alphabet) {
    return function (char) {
      const index = alphabet.indexOf(char);
      return index === -1 ? char : alphabet[(index + shift) % 26];
    };
  };

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const rotateLower = rotate(lowercase);
  const rotateUpper = rotate(uppercase);

  if (lowercase.includes(char)) {
    return rotateLower(char);
  } else if (uppercase.includes(char)) {
    return rotateUpper(char);
  } else {
    return char;
  }
}

console.log(rotateCharacter("z", 3)); // Output: "c"
console.log(rotateCharacter("n", 1)); // Output: "o"
console.log(rotateCharacter("o", 5)); // Output: "t"
console.log(rotateCharacter("K", 7)); // Output: "R"
console.log(rotateCharacter("P", 6)); // Output: "V"

// 1 Check if the character is in the lowercase alphabet
// 2 Find the index of the character in the lowercase alphabet
//  3 Calculate the new index after rotation
// 4 Return the rotated character
// 5 Check if the character is in the uppercase alphabet
// 6 Calculate the new index after rotation
// 7 Return the rotated character
// 8 If the character is not a letter, return it unchanged

console.log(rotateCharacter("a", 3)); // Output: "d" (rotate 'a' by 3 positions in the lowercase)
console.log(rotateCharacter("F", 1)); // Output: "G" (rotate 'F' by 1 position in the uppercase)
console.log(rotateCharacter("?", 5)); // Output: "?" (non-letter remains unchanged)

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character (char) that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.

function rotateCharacter(char, shift) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (lowercase.includes(char)) {
    const index = (lowercase.indexOf(char) + shift) % 26;
    return lowercase[index];
  } else if (uppercase.includes(char)) {
    const index = (uppercase.indexOf(char) + shift) % 26;
    return uppercase[index];
  } else {
    // If the character is not a letter, return it unchanged
    return char;
  }
}

console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').

console.log(rotateCharacter("z", 1)); // Output: "a" (unchanged, not a letter)

function rotateCharacter(char, shift) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (lowercase.includes(char)) {
    const index = (lowercase.indexOf(char) + shift) % 26;
    return lowercase[index >= 0 ? index : index + 26];
  } else if (uppercase.includes(char)) {
    const index = (uppercase.indexOf(char) + shift) % 26;
    return uppercase[index >= 0 ? index : index + 26];
  } else {
    // If the character is not a letter, return it unchanged
    return char;
  }
}

console.log(rotateCharacter("z", 3)); // Output: "c" (wraps 'z' to 'c')
console.log(rotateCharacter("Z", 3)); // Output: "C" (wraps 'Z' to 'C')
console.log(rotateCharacter("b", 4)); // Output: "c" (wraps 'z' to 'c')
console.log(rotateCharacter("K", 1)); // Output: "C" (wraps 'Z' to 'C')

// too long to understand  I feel a bit overwhelmed when faced with this kind of complex code.  :( I used Ai to understand this exercise, but still find it very complex.
