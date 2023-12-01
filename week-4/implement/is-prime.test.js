// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime
function isPrime(num) {
    
    if (num <= 1) {
        return `${num} is not prime`;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not prime`;
        }
    }

    return `${num} is prime`;
}

// console.log(isPrime(111));
test("check if 111 is prime number", function () {
    const num= 111;
    const currentOutput = isPrime(num);
    const targetOutput = "111 is not prime";
  
    expect(currentOutput).toBe(targetOutput);

});