function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    // letter === "i" || Duplicated
    letter === "o" ||
    letter === "u"
  );
}
// here is an implementation of isVowel - this function checks if a letter is a vowel

const currentOutput = isVowel("a");
const targetOutput = true;
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
console.log("case: letter a...",currentOutput);


const currentOutput2 = isVowel("e");
const targetOutput2 = true;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);
console.log("case: letter e...",currentOutput2);


const currentOutput3 = isVowel("k");
const targetOutput3 = false;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
console.log("case: letter k...",currentOutput3);
