// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

function isValidCardNumber(cardNum) {
  if (
    cardNum.length !== 16 ||
    !Number(cardNum) ||
    cardNum.slice(-1) % 2 !== 0
  ) {
    return false;
  }
  // Take first char
  // Check if it is equal all other chars
  // Count the equal numbers
  // return false if count is equal to 16

  let index = 0;
  let firstChar = cardNum[index];
  let count = 0;

  while (index < cardNum.length) {
    if (firstChar === cardNum[index]) {
      count++;
    }
    index++;
  }
  if (count === 16) {
    return false;
  }

  // Set total to 0
  // Add all digits to total
  // return false if count is less than 16

  let total = 0;
  index = 0;

  while (index < cardNum.length) {
    // Number conversion is needed otherwise "+" sign makes concatenation and give incorrect answer.
    total = Number(cardNum[index]) + total;
    index++;
  }
  if (total < 16) {
    return false;
  }
  return true;
}

test("Invalid card number check - not 16 digits ", function () {
  //GIVEN
  const targetOutput = false;
  const num = "88899";

  //WHEN
  const currentOutput = isValidCardNumber(num);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

test("Invalid card number check - not all chars are numbers ", function () {
  //GIVEN
  const targetOutput = false;
  const num = "a92332119c011112";

  //WHEN
  const currentOutput = isValidCardNumber(num);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

test("Invalid card number check - only one type of number", function () {
  //GIVEN
  const targetOutput = false;
  const num = "4444444444444444";

  //WHEN
  const currentOutput = isValidCardNumber(num);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

test("Invalid card number check - odd final number", function () {
  //GIVEN
  const targetOutput = false;
  const num = "6666666666666661";

  //WHEN
  const currentOutput = isValidCardNumber(num);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

test("Invalid card number check - sum less than 16", function () {
  //GIVEN
  const targetOutput = false;
  const num = "1111111111111110";

  //WHEN
  const currentOutput = isValidCardNumber(num);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

test("Valid card number check", function () {
  //GIVEN
  const targetOutput = true;
  const num1 = "9999777788880000";
  const num2 = "6666666666661666";

  //WHEN
  const currentOutput1 = isValidCardNumber(num1);
  const currentOutput2 = isValidCardNumber(num2);

  //THEN
  expect(currentOutput1).toBe(targetOutput);
  expect(currentOutput2).toBe(targetOutput);
});
