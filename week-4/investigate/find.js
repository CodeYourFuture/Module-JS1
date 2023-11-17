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
/*
The `index` variable keeps track of the current position number in the string str variable, as the function searches 
for the specified character that has been provided in the char variable. 
It starts at 0 and increases by 1 after each loop.
*/
// b) What is the if statement used to check
/*
The `if` statement checks whether the character at the current position in the str variable matches the character 
that we are looking for in the char variable. If they match, the function stops the loop/searching 
and returns the current position number.
*/
// c) Why is index++ being used?
/*
The index++ is used to increment the index variable by 1 after each turn of the while loop. 
This makes that the while loop will continue until the end of the str string is reached or until 
a matching character is found that is equals to the character in char variable.
*/
// d) What is the condition index < str.length used for?
/*
The condition index < str.length is used to make sure whether the loop should continue the search. The loop will 
continue to as long as the index variable is less than the length of the str string. This ensures that 
the entire str string is searched before the loop ends.
*/
