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

// a):

// The index variable is initially set to 0.
// Inside the while loop, index is incremented by 1 in each iteration using the index++ statement.
// The purpose is to move through each character in the string, checking if it matches the target character.

// b):

// The if statement is checking if the character at the current index in the string (str[index]) is equal to the target character (char).
// The condition is if (str[index] === char). If this condition is true, it means the target character is found at the current index.

// c):

// index++ is the post-increment operator, and it is used to increment the index variable by 1 after each iteration of the loop.
// This is necessary to move to the next character in the string and avoid an infinite loop.

// d):

// The condition index < str.length is used as the loop condition.
// The loop continues to iterate as long as the current value of index is less than the length of the string (str.length).
// This ensures that the loop iterates through each character in the string, and it prevents going beyond the bounds of the string.
