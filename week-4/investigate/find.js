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
// Increment 1 when reading index++, when the if statement returns false.
// b) What is the if statement used to check
// The if statement checks, for each character in str, if char is equals to the respective character from str. 
// c) Why is index++ being used?
// To progress the loop, going forward one str's character each loop and checking it using the if statement.
// d) What is the condition index < str.length used for?
// To limit the loop cycles to the amount of characters in str. The while statement will stop when index reach the same value than the str's length.
