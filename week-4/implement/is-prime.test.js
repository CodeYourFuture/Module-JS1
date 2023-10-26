// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

test("To check if a number is prime", () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(-84)).toBe(false);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(12)).toBe(false);
  expect(isPrime(1003)).toBe(false);
});