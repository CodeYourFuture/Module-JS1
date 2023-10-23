// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrim(num) {
    if (num === 1) {
        return "no prime";       
    }
    if(num===2){
        return "is a prime";
    }
    
    if(num===3){
         return "is a prime"
    }
    if (num % 4 == 0 || num % 3 == 0 || num % 2 == 0) {
        return "no prime"
    } else {
        return "is a prime"
    }

}

test('checks if the number is prime', () => {
    expect(isPrim(1)).toBe("no prime");
    expect(isPrim(2)).toBe("is a prime");
    expect(isPrim(3)).toBe("is a prime");
    expect(isPrim(4)).toBe("no prime");
    expect(isPrim(5)).toBe("is a prime");
    // Add more test cases as needed
});