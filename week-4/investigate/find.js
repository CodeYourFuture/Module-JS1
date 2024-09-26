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
//Ans. It adds 1 everytime the loop runs as index keep adding up until the input character has been reached
// b) What is the if statement used to check
//Ans. it's checking the value of certain index or string against the input character
// c) Why is index++ being used?
// Ans. It is being used to just add 1 to the value of index each time it has not reached the input character
// d) What is the condition index < str.length used for?
//Ans. As long as number of index is less than the length of the string.
