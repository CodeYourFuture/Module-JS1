// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
  if (num <= 1 || Number.isInteger(num) === false) {
    //if the number is smaller than or equal to 1 or if the number isn't a whole number return false
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    // starts from 2 and,  ( increase by 1) runs as long as the value of i is less than or equal to half of num

    if (num % i === 0) {
      //if  num' is divisible by the value of i.
      return false;
    }
  }

  return true;
}

test("checks if number is prime number", function () {
  // Numbers tested with different orderings

  expect(isPrime(5)).toBe(true);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(-3)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(2.5)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(15.75)).toBe(false);
});
