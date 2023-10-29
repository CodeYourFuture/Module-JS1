function cardValidator(num) {
  let addUpDigits = 0;
  const changeToNumber = String(num);
  const checkTypeIsNumber = isNaN(num);
  const lastDigit = num % 10;
  const checkLastNumIsEven = lastDigit % 2 === 0;

  if (changeToNumber.length < 16 || checkTypeIsNumber || !checkLastNumIsEven) {
    return false;
  }

  while (num) {
    addUpDigits = addUpDigits + (num % 10);
    if (num % 10 !== lastDigit && addUpDigits > 16) return true;
    num = Math.floor(num / 10);
  }
  return false;
}

// console.log(cardValidator(1234567812345678));
// console.log(cardValidator(1234567812345663));
// console.log(cardValidator(1234567812345662));
// console.log(cardValidator(1111111111111111));
// console.log(cardValidator(1111111110000000));
// console.log(cardValidator(1111111111111110));

test("validates wether card numbers are valid", function () {
  expect(cardValidator(1234567812345678)).toBe(true);
});

test("checks data type is a number", function () {
  expect(cardValidator("a92332119c011112")).toBe(false);
});

test("checks all numbers aren't the same", function () {
  expect(cardValidator("1111111111111111")).toBe(false);
});

test("verifies number contains 16 digits", function () {
  expect(cardValidator("111111111111")).toBe(false);
});

test("checks final digit is even", function () {
  expect(cardValidator("1234567812345679")).toBe(false);
});

// console.log(cardValidator(19938758));
// console.log(cardValidator(222222222));
// // console.log(cardValidator("hello"));
// console.log(cardValidator(1234567812345678));
// console.log(cardValidator(1234567812345673));

//

// Check to see if the number is 16 digits
// - Count the length is 16 in an if statement

// Check if the number has a data type of a number
// - Verify the data type in an if statement

// Check that there at least 2 different numbers
// - Create a loop to check each digit starting from the end
// is different to the first digit. Once one is confirmed
// return true, if none are confirmed return false.

// Check if the last number is even?
// How can i target the last digit?
// Target the last digit and then check, if its
// divided by 2 there is a remainder of 0 and not 1

// All digits added up must be greater than 16
// How can i add the digits up?
// - Add the digits up and then confirm that there > 16

// let n = 529,
//   remainder,
//   count = 0;

// while (n) {
//   remainder = n % 10;
//   count = count + remainder;
//   n = Math.floor(n / 10);
// }

// console.log(count);
