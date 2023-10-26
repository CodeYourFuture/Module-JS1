// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
    if (num == 1) {
        return "Not a Prime Number"
    }
    if (num == 2) {
        return "A Prime Number"
    }
    if (num == 3) {
        return "A Prime Number"
    }
    if (num % 4 == 0 || num % 3 == 0 || num % 2 == 0) {
        return "Not a Prime Number"
    } else {
        return "A Prime Number"
    }
}

test("Check if number is prime", function () {
    const input = 3;
    const currentOutput = isPrime(3);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 7;
    const currentOutput = isPrime(7);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 6;
    const currentOutput = isPrime(6);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 8;
    const currentOutput = isPrime(8);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

