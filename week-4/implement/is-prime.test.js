// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
    if (num <= 1) {
        return "Not a prime";
    }
    if (num == 3) {
        return "Prime";
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return "Not a prime"; // Divisible by 2 or 3 means it's not prime
    } else {
        return "Prime"
    }
}

test("tests", function () {
    expect(isPrime(3)).toBe("Prime");
  });

  test("tests", function () {
    expect(isPrime(1)).toBe("Not a prime");
  });
  