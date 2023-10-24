// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    if (num <= 3) {
        return true;
    }
    
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(2));  
console.log(isPrime(17)); 
console.log(isPrime(4));  
console.log(isPrime(1));  


test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});

test('17 is prime', () => {
    expect(isPrime(17)).toBe(true);
});

test('4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
});

test('1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
});