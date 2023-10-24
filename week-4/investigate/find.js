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

/*index tracks the current position, index++ increments it, 
(b) if checks for a match,

// b) What is the if statement used to check

The if statement checks whether the character at 
the current position (given by the value of index) 
is equal to the character you are searching for (char).


// c) Why is index++ being used?

index++ moves to the next character, and (d) index
 < str.length ensures the loop stays within string bounds.

// d) What is the condition index < str.length used for?

The condition index < str.length is used to ensure that the 
loop continues as long as the index (index) is within the bounds
 of the string. Once index is equal to or greater than the 
length of the string, the loop terminates.