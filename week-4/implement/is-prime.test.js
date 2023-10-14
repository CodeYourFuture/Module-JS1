// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime
function isPrime(num) {
    if (num <= 1) {
       return false;
    }
    if (num === 2) {
       return true;
    }
    if (num % 2 === 0) {
       return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
       if (num % i === 0) {
         return false;
       }
    }
    return true;
   }
   
   // Test cases
   console.log(isPrime(1)); // false
   console.log(isPrime(2)); // true
   console.log(isPrime(3)); // true
   console.log(isPrime(4)); // false
   console.log(isPrime(5)); // true
   console.log(isPrime(6)); // false
   console.log(isPrime(7)); // true
   console.log(isPrime(8)); // false
   console.log(isPrime(9)); // false
   console.log(isPrime(10)); // false
   console.log(isPrime(11)); // true
   console.log(isPrime(12)); // false
   console.log(isPrime(13)); // true
   console.log(isPrime(14)); // false
   console.log(isPrime(15)); // false
   console.log(isPrime(16)); // false
   console.log(isPrime(17)); // true
   console.log(isPrime(18)); // false
   console.log(isPrime(19)); // true
   console.log(isPrime(20)); // false
   console.log(isPrime(21)); // false
   console.log(isPrime(22)); // false
   console.log(isPrime(23)); // true
   console.log(isPrime(24)); // false
   console.log(isPrime(25)); // false