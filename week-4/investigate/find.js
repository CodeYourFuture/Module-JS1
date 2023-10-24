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

// The index value is zero. While index is less than the length of the string str, the function goes into a while loop. Every iteration of the loop increases the index by one (index++).

// b) What is the if statement used to check
// The purpose of the if statement is to determine if the character supplied as the char argument equals the character at the current index of the string str.

// c) Why is index++ being used?
// Every time the loop iterates, the index variable is increased by 1 using index++.

// d) What is the condition index < str.length used for?
//As current value of index is less than the length of the str string, the loop will keep running. 
