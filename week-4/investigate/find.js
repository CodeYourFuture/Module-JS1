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

// a) How the index variable updates during the call to find    with ++ index increases every time loop occurs
// b) What is the if statement used to check                    it checks if the character at [index] is equal to char variable
// c) Why is index++ being used?                                to increase the number that index variable holds by one
// d) What is the condition index < str.length used for?        to make sure loop occurs for every letter of given string and than breaks at the end of string
