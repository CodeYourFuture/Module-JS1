// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
  if (isNaN(num) || num <= 0 || Number.isInteger(num) !== true) {
    return "Invalid input, please enter a positive integer number";
  } else if (num === 2) {
    return true;
  } else if (num % 2 === 0 || num === 1) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

test("returns a boolean representing whether the num is prime", function () {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(0)).toBe(
    "Invalid input, please enter a positive integer number"
  );
  expect(isPrime(2.2)).toBe(
    "Invalid input, please enter a positive integer number"
  );
  expect(isPrime(0.5)).toBe(
    "Invalid input, please enter a positive integer number"
  );
  expect(isPrime(-7)).toBe(
    "Invalid input, please enter a positive integer number"
  );
  expect(isPrime("abc")).toBe(
    "Invalid input, please enter a positive integer number"
  );
});
