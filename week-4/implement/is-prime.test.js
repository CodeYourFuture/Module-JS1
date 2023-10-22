// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
  if ((typeof num !== Number && num <= 1) || num % 1 !== 0) {
    return "This is not a prime number";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && num > 1) {
      return "This is not a prime number";
    }
  }
  return "This is a prime number";
}

test("tests to see if number is prime not", function () {
  expect(isPrime(3)).toBe("This is a prime number");
});

test("tests to see if number is prime not", function () {
  expect(isPrime(101)).toBe("This is a prime number");
});

test("tests to see if number is prime not", function () {
  expect(isPrime(1)).toBe("This is not a prime number");
});

test("tests to see if number is prime not", function () {
  expect(isPrime(0)).toBe("This is not a prime number");
});

test("tests to see if number is prime not", function () {
  expect(isPrime(6)).toBe("This is not a prime number");
});
