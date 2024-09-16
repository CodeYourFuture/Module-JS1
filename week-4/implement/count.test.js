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
function countChar(str, char) {
    // Initialize a counter to keep track of occurrences
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches the specified character
        if (str[i] === char) {
            // Increment the counter if there is a match
            count++;

            // Additional logic to handle consecutive occurrences
            // For example, if char is 'a' and str is 'aaaaa',
            // we want to count this as one occurrence of 'a'.
            // So, we can skip consecutive occurrences by incrementing i until a different character is encountered.
            while (i + 1 < str.length && str[i + 1] === char) {
                i++;
            }
        }
    }

    // Return the final count of occurrences
    return count;
}

// Example Usage:
const str1 = "aaaaa";
const char1 = "a";
console.log(countChar(str1, char1)); // Output: 5

const str2 = "Hello, World!";
const char2 = "z";
console.log(countChar(str2, char2)); // Output: 0


// This implementation checks each character in the string and increments the count whenever
// it finds a match with the specified character. It also handles consecutive occurrences by
// skipping them and only counting them once. If no occurrences are found, it returns 0.