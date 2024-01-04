function cardValidator(cardNumber) {
  let points = 0;
  if (cardNumber.lenght === 0 && isNaN(cardNumber)) {
    points--;
  }
  const container = "";
  for (i = 0; i < cardNumber.lenght; i++) {
    if (!container.includes(cardNumber[i])) {
      container += cardNumber[i];
    }
  }
  if (container < 2) {
    points--;
  }
  if (Number(cardNumber.slice(-1)) % 2 === 1) {
    points--;
  }
  const containerNum = 0;
  for (i = 0; i < cardNumber.lenght; i++) {
    containerNum += Number(cardNumber[i]);
  }
  if (containerNum < 17) {
    points--;
  }

  if (points < 4) {
    return false;
  } else {
    return true;
  }
}

// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

test("Number must be 16 digits", function () {
  const input = "123456789012345";
  const currentOutput = cardValidator(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});

test("all of them must be numbers", function () {
  const input = "123456789012345a";
  const currentOutput = cardValidator(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("at least two different digits", function () {
  const input = "1111111111111111";
  const currentOutput = cardValidator(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("The final digit must be even", function () {
  const input = "1234567890123455";
  const currentOutput = cardValidator(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("sum of all the digits must be greater than 16", function () {
  const input = "1111111111111110";
  const currentOutput = cardValidator(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
