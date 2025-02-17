// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let factor = 2;

  while (factor < num) {
    if (num % factor === 0) {
      return false;
    }
    factor++;
  }
  return true;
}

test("prime number check  ", function () {
  //GIVEN
  const targetOutput = true;
  const num = 2;

  //WHEN
  const currentOutput = isPrime(num);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

test("no prime number check  ", function () {
  //GIVEN
  const targetOutput = false;
  const num = 16;

  //WHEN
  const currentOutput = isPrime(num);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

test("prime number check for less than 2 ", function () {
  //GIVEN
  const targetOutput = false;
  const num = 1;

  //WHEN
  const currentOutput = isPrime(num);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});