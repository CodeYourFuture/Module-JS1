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
//Ans: when we call a function the copy of variable index passed through the function and changes made to the parameter value.
// b) What is the if statement used to check
//Ans: The if statement checks if the string of index has those character return the index.
// c) Why is index++ being used?
//Ans; To increase the index value by one each time. as like this index = index + 1; 
// d) What is the condition index < str.length used for?
//Ans ; here while loop is used to insure to continous if the string index is less then 0 .
