// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num){
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++){
        if(num%i===0)
        return false;
    }
    return true;
}

test("checks if number is prime number", function () {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(22)).toBe(false);
});    