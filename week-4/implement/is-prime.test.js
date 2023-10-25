// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrim(num) {
    if (typeof num === 'number' && num > 1 && Number.isInteger(num)) {
        for (let i = 2; i <= Math.floor(num/2); i++) {
            if (num % i === 0) {
                return `${num} is not a prime number`;
            }
        }
        return `${num} is a prime number`;
    } else if (typeof num === 'number' && num === 1) {
        return `${1} is not a prime number`;
    } else {
        return `try by a valid number`;
    }
}

test('checks if the number is prime', () => {
    expect(isPrim(1)).toBe("is not a prime number");
    expect(isPrim(2)).toBe("is a prime number");
    expect(isPrim(3)).toBe("is a prime number");
    expect(isPrim(12)).toBe("is not a prime number");
    expect(isPrim(877)).toBe("is a prime number");
    // Add more test cases as needed
});