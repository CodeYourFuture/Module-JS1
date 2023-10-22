// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

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
test("Check if number is prime", function () {
    const input = 51;
    const currentOutput = isPrime(51);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 9;
    const currentOutput = isPrime(9);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 10;
    const currentOutput = isPrime(10);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 11;
    const currentOutput = isPrime(11);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 12;
    const currentOutput = isPrime(12);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 13;
    const currentOutput = isPrime(13);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 14;
    const currentOutput = isPrime(14);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 15;
    const currentOutput = isPrime(15);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 16;
    const currentOutput = isPrime(16);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 17;
    const currentOutput = isPrime(17);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 19;
    const currentOutput = isPrime(19);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 23;
    const currentOutput = isPrime(23);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 28;
    const currentOutput = isPrime(28);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 29;
    const currentOutput = isPrime(29);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 97;
    const currentOutput = isPrime(97);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 96;
    const currentOutput = isPrime(96);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});
test("Check if number is prime", function () {
    const input = 51;
    const currentOutput = isPrime(51);
    const targetOutput = "Not a Prime Number";
    expect(currentOutput).toBe(targetOutput);
});

test("Check if number is prime", function () {
    const input = 53;
    const currentOutput = isPrime(53);
    const targetOutput = "A Prime Number";
    expect(currentOutput).toBe(targetOutput);
});