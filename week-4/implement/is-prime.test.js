// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const numToCheck = 9;
if (isPrime(numToCheck)) {
  console.log(`${numToCheck} is prime.`);
} else {
  console.log(`${numToCheck} is not prime.`);
}