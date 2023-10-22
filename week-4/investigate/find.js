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

// a) How the index variable updates during the call to find. 
// When find is called, It set index value to 0 and then execute the while loop where it checks the condition. If the condition is true it returns the index, if not it updates the index by adding 1. 
// b) What is the if statement used to check .
//It is checking if the "char" is in the string and if this condition is true then it will return the index of the character where it matches the 'char'.
// c) Why is index++ being used? 
//Because it is updating the index value by adding 1.This way the loop will go through each index of the string.
// d) What is the condition index < str.length used for? 
// that index limits to the length of the string.
