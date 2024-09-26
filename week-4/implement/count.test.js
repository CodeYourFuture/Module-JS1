// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count consecutive occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
function countOccurrences(input, char) {
    const num = input.split(char).length - 1 
    if(num => 1)
    return `${char} occurs ${num} times`;
else{`${char} occurs 0 times`;

}
  }
 
//   console.log(countOccurrences('aaaaa', 'a'));
//   console.log(countOccurrences('aaaaa', 'b'));
  test("count number of a in aaaaa", function () {
    const input= 'aaaaa';
    const char= 'a';
    const currentOutput = countOccurrences(input , char);
    const targetOutput = "a occurs 5 times";
  
    expect(currentOutput).toBe(targetOutput);

});