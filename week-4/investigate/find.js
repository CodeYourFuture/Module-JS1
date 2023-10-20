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
// ANSWER : 
//at the end of `While` statement by Index++ which add 1 to index and assign it to index again . Index++ == Index=Index+1


// b) What is the if statement used to check
//ANSWER: function find take two parametere str and char , `if` check if char is equail to the indexth character of str. for example
//`if(str[1]==char) is `true` it means second character of str is same with `char` .

// c) Why is index++ being used?
//ASWER: by using Index++ , it increases Index 1 each time to avoid making an unfinit loop. by deleting Index++
// the loop won't stop.


// d) What is the condition index < str.length used for?
// to check index won't exceed the length of the `str` as the code aims loop through the str characters.
// and if there isn't a condition to to breake the loop it will be an unfinit loop .
