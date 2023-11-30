// implement a function countChar that counts the number of times a character occurs in a string

function countChar(str, char){
    let index = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]===char){
            index++;
        }
        while (str[i+1]===char){
            i++;
            index++;
        }
    }
    return index;
}
test("This will check consecutive occurrences or no occurrences of a given character", function () {

    expect(countChar("asad","s")).toBe(1);
    expect(countChar("assa", "s")).toBe(2);
    expect(countChar("aaad", "s")).toBe(0);
    expect(countChar("asssssd", "s")).toBe(5);
});
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
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str
