// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(number) {
  if (number > 0 && number % 2 == 0) {
    return true;
  }
  if (number > 0 && number % 2 != 0) {
    return false;
  } else {
    return "Insert a positive number";
  }
}

console.log(isPrime(2));
