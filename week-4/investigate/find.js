function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index + 1;
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
// Answer: The index variable start with the position 0 and then will update increasing one more position always the index value be smaller than the string length.

// b) What is the if statement used to check
// Answer: The if statement is used to check the index position of the character we are looking for.

// c) Why is index++ being used?
// Answer: The index++ is used to increment the index position if the character we are lofinoking for is not founded yet.

// d) What is the condition index < str.length used for?
//Answer: Is to make the loop increasing one position until the index be smaller than the string length or the character were founded in the string.
