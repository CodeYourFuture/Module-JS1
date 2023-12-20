function find(str, char) {
  let index = 0;
  //  to clarify this part here is an example: Suppose the function is given the string "hello" and the character 'o'. In this case, the function will determine at which index the character 'o' is located within this string.

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

// it starts checking the characters one by one and begins with the character at the 0th index, which is 'h'. If this character isn't 'o', the index value is increased by 1 to check the next character.
//it continues checking each character in sequence. When it finds the 'o' character, the function returns its position (for instance, 3) and stops the search. If the 'o' character isn't found, the function returns -1.

console.log(find("code your future", "u")); //7
console.log(find("code your future", "z")); // -1

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

/*a) How the index variable updates during the call to find 
    The index variable updates in find by incrementing using index++ within the while loop, moving through str's characters one by one. */

/* b) What is the if statement used to check 
    The if statement if (str[index] === char) is used to check if the character at the current index in the string (str[index]) matches the specified character char.*/

/* c) Why is index++ being used? 
    index++ increments the variable after each loop, to advance to the next character in the string.*/

/* d) What is the condition index < str.length used for?
The condition index < str.length prevents the loop from searching beyond the string's length while finding the character. */
