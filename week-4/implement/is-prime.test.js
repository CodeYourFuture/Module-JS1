// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime


const isPrime = require("./is-prime");


test("When the function is called with num as input,Then it should return a boolean representing whether the num is prime", () =>{

    expect(isPrime(17)).toBe(true);
});