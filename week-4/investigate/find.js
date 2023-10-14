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

//a The index variable updates during the call to find by incrementing its value by 1 at each iteration of the while loop. This is done using the index++ syntax, which is equivalent to index = index + 1.

//b The if statement is used to check if the character at the current position in the string (str[index]) is equal to the character we are looking for (char). This is done using the == operator.

//c The index++ syntax is used to increment the index variable by 1. This is done because, after checking a character, we want to move on to the next character in the string.

//d The condition index < str.length is used for the while loop to ensure that the loop continues to iterate as long as the current position in the string (index) is less than the length of the string (str.length). This ensures that the function will check all the characters in the string until it finds a match or reaches the end of the string.


