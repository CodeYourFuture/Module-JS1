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
// The function is asking you to find the first instance of there being a particular character.
// In the first log we are asking for the string length, until you reach "u" in the string "code your future"
// b) What is the if statement used to check
// Calculating how many steps from the first character in the string it takes to get to the specific character stored in char
// c) Why is index++ being used?
// Because its a quicker way to continuously add one if the conditions are true within the statement
// d) What is the condition index < str.length used for?
// Allowing us to loop through the strings length, until either the conditions are/not met.
// If it reaches the end of the string, then it will then return -1
