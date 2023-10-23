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
// variable is incremented by 1 using the index++ statement, and the loop continues to the next iteration.
// b) What is the if statement used to check
// The if statement checks if a specific character in the string is the one we're looking for. If it is, the function gives us the position of that character. If it's not, the function continues searching

// c) Why is index++ being used?
//The index++ is used to move to the next character in the string

// d) What is the condition index < str.length used for?
//The condition index < str.length ensures that the function stops searching when it reaches the end of the string.

