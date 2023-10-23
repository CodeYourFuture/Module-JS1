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
// the index keeps on increasing by 1
// b) What is the if statement used to check
// It is checking if the given character is available in the string and the index that the character is found
// c) Why is index++ being used?
// because its a loop and the condition goes to check on the next index everytime it returns false
// d) What is the condition index < str.length used for?
// It is used to check all the characters using their index in a string
