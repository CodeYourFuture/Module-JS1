// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(number) {
    let isPrime = true;
  
    if (number === 1) {
      console.log("1 is neither prime nor composite number.");
  }
  else if (number > 1) {
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }
  
      if (isPrime) {
          console.log(`${number} is a prime number`);
      } else {
          console.log(`${number} is a not prime number`);
      }
  }
  else {
      console.log("The number is not a prime number.");
  }
  }
  isPrime(3);
  