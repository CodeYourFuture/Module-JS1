// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
  let dividers = 0;
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers++;
    }
  }
  if (dividers === 2) {
    return true;
  } else {
    return false;
  }
}

test("check if 0 is prime", function () {
  const input = 0;
  const currentOutput = isPrime(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("check if 1 is prime", function () {
  const input = 1;
  const currentOutput = isPrime(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("check if 2 is prime", function () {
  const input = 2;
  const currentOutput = isPrime(input);
  const targetOutput = true;

  expect(currentOutput).toBe(targetOutput);
});
test("check if 3 is prime", function () {
  const input = 3;
  const currentOutput = isPrime(input);
  const targetOutput = true;

  expect(currentOutput).toBe(targetOutput);
});
test("check if 4 is prime", function () {
  const input = 4;
  const currentOutput = isPrime(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
test("check if 9 is prime", function () {
  const input = 9;
  const currentOutput = isPrime(input);
  const targetOutput = false;

  expect(currentOutput).toBe(targetOutput);
});
