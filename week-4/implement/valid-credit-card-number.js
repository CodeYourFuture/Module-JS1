/*## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
*/

function validCardNumber(cardNumber) {
  //if the input is not a number or is not 16 digits
  if (isNaN(cardNumber) || cardNumber.length !== 16) {
    return false;
  }
  // here each character becomes a separate element with .split ("") like in an Array like this ["1", "2", "3", "4", "5", "6"]
  //.map  takes each of those individual elements and converts them into numbers.[1, 2, 3, 4, 5, 6]
  const eachNum = cardNumber.split("").map(Number);

  // if all numbers are the same      // every() is an array method in JavaScript used to verify whether all elements within the array meet a specific condition.
  const isSame = eachNum.every((eachNums) => eachNums === eachNum[0]);
  if (isSame) {
    return false;
  } // this checks if all elements in the array eachNum are equal to the first element (eachNum[0]).

  // if the final number is even
  if (eachNum[15] % 2 !== 0) {
    return false;
  } //this  checks whether the 16th element of the eachNum array (or the last element in the array) is even or not. The expression eachNum[15] represents the element at index 15 (index numarasi 15 olan)of the array (indexing starts at 0 ), which corresponds to the last element in this case.

  // Calculate the sum of all numbers
  const sum = eachNum.reduce((total, eachNums) => total + eachNums, 0); // reduce method calculates the sum of the numbers in the eachNum array. Each element participates in the addition process with the initial value (0), and the total sum is stored in the sum variable.

  //  if the sum is greater than 16
  if (sum <= 16) {
    return false;
  }

  return true;
}

// Test cases

console.log(validCardNumber("3333333333333330")); // true
console.log(validCardNumber("2222222222222222")); // false

console.log(validCardNumber("3549777788880000")); // true
console.log(validCardNumber("6236699363666166")); // true

console.log(validCardNumber("a92332119c011112")); // false

console.log(validCardNumber("4999999999999999")); // false
