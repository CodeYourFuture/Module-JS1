// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num != Math.round(num)) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++){
        if(num%i===0)
        return false;
    }
    return true;
}

test("Check if the number is a positive prime number", function () {

    expect(isPrime(3)).toBe(true);
    expect(isPrime(-7)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(17)).toBe(true);
});