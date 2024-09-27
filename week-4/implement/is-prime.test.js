// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(number) {
  if (Number.isInteger(number) && number > 0) {
    let isPrime = true;
    let halfNumber = Math.floor(number / 2);
    for (let i = 2; i <= halfNumber; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    } return isPrime;
  } return 'Invalid input'
}

test('Should works for any positive integer', () => {
  expect(isPrime(1)).toBe(true);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(10)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(12)).toBe(false);
  expect(isPrime(13)).toBe(true);
  expect(isPrime(14)).toBe(false);
  expect(isPrime(15)).toBe(false);
  expect(isPrime(16)).toBe(false);
  expect(isPrime(17)).toBe(true);
  expect(isPrime(18)).toBe(false);
  expect(isPrime(19)).toBe(true);
  expect(isPrime(20)).toBe(false);
  expect(isPrime(21)).toBe(false);
  expect(isPrime(22)).toBe(false);
  expect(isPrime(23)).toBe(true);
})