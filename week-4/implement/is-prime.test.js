// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

//................................................................

// ANSWER

function isPrime(num) {
    if (num <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
  
    return true; 
  }

  test('returns true for prime number 7', () => {
    expect(isPrime(7)).toBe(true);
  });
  
  test('returns false for non-prime number 12', () => {
    expect(isPrime(12)).toBe(false);
  });
  
  test('returns false for 1', () => {
    expect(isPrime(1)).toBe(false);
  });
  
  test('returns false for 0', () => {
    expect(isPrime(0)).toBe(false);
  });