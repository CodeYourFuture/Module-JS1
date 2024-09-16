function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

//................................................................................................................

//ANSWER

// We have line of letters "code your future." and we want to find a specific letter in this line, letter "u."

// This function called "find" is like a little helper that looks at each letter in the line, one by one. It starts at the beginning and keeps going until it either finds the letter "u" or looks at every letter in the line.

// Here's what the function called “find” which is our helper does step by step:

// a) The helper uses a special counter, which we called "index". It starts at the beginning (the first letter), and each time it checks a letter, it moves to the next one. So, it goes from the first letter, then the second, then the third, and so on.

// b) When the helper looks at a letter, it asks a question: "Is this letter the one we're looking for?" It uses a special rule (===) to check if the letter it's looking at is the same as the one we want to find. 

// c)  The helper uses a trick called “Incrementing." to look at each letter one after the other. It does this by adding 1 to its counter, which we call “index”.

// d)  The condition “index < str.length" is used : because we don’t want our  helper to go too far and look at letters that aren't there. So, it has a rule:  something like:  I’ll keep looking as long as I haven't looked at all the letters in the line. It checks this rule before looking at each letter. It is only after it has looked at all the letters, then it stops.

// So, when we ask the helper to find the letter "u" in our line, it looks through each letter until it finds the first "u." If it finds it, it tells us where it found it (which position), and if it doesn't find it, it says, "I didn't find it," and tells us -1.

// In our example, it found the first "u" at position 2 (because we start counting from 0), and it didn't find "z," so it says -1. 

