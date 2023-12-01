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

function countChar(char, str){

    let count = 0;
    let index = 0;

    while (index < str.length){
        if (char === str[index]){
            count++;
        } 
        index++;
    }
    return count;
}

test("works for multiple occurrences", function () {
  expect(countChar("a", "aaaaa")).toBe(5);

});


test("works for no occurrences", function () {
  expect(countChar("b", "aaaaa")).toBe(0);
  expect(countChar("B", "aaaa")).toBe(0);

});