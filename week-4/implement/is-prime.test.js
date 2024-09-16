// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

//a function named isPrime that takes a parameter num.

function isPrime(num) {
  // If the number is less than 2, it's not prime
  //If the input number num is less than 2, it's not a prime number, so the function returns false.
  if (num < 2) {
    return false;
  }
//The function uses a for loop to iterate from 2 to the square root of num.
// Inside the loop, it checks if num is divisible by the current value of i.
// If it is divisible, the function returns false, indicating that the number is not prime.

// Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by any other number, it's not prime
      return false;
    }
  }

// (If no divisor is found, the number is prime)
  return true;
}
//If the loop completes without finding any divisor, the function returns true, 
//indicating that the number is prime.