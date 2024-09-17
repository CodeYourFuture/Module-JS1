function isVowel(letter) {
  // Check if is a string and change the log text
  if (typeof letter == "string") {
    console.log(`Case: letter ${letter}...`);
  } else {
    console.log(`Case: ${letter}...`);
  }

  return ["a", "e", "i", "o", "u"].includes(letter);
}

// here is an implementation of isVowel - this function checks if a letter is a vowel

// Assertions replaced for better readability
function assertion(letter, targetOutput) {
  const currentOutput = isVowel(letter);
  console.assert(
    currentOutput === targetOutput,
    `Current output: %s, target output: %s`,
    currentOutput,
    targetOutput
  );
}
assertion("a", true);
assertion("e", true);
assertion("k", false);
// Added check for non-string inputs
assertion(4, false);
assertion(false, false);

// console.log("case: letter a...");
// const currentOutput = isVowel("a");
// const targetOutput = true;
// console.assert(
//   currentOutput === targetOutput,
//   "current output: %s, target output: %s",
//   currentOutput,
//   targetOutput
// );

// console.log("case: letter e...");
// const currentOutput2 = isVowel("e");
// const targetOutput2 = true;
// console.assert(
//   currentOutput2 === targetOutput2,
//   "current output: %s, target output: %s",
//   currentOutput2,
//   targetOutput2
// );

// console.log("case: letter k...");
// const currentOutput3 = isVowel("k");
// const targetOutput3 = false;
// console.assert(
//   currentOutput3 === targetOutput3,
//   "current output: %s, target output: %s",
//   currentOutput3,
//   targetOutput3
// );
