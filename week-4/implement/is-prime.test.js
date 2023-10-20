// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function checkForPrimeNumbers(num) {
    if(typeof(num) === "string"){
        return "Invalid";
    }
    else if(num <= 2 && num >= 0) {
       return false;
    }
    else if(num > 2){
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
            return true;
        }
    }
    return "Invalid";
}

test("checks if a number is prime", function () {
  expect(checkForPrimeNumbers(4)).toBe(false);
  expect(checkForPrimeNumbers(1)).toBe(false);
  expect(checkForPrimeNumbers(-9)).toBe("Invalid");
  expect(checkForPrimeNumbers(7)).toBe(true);
  expect(checkForPrimeNumbers(23)).toBe(true);
  expect(checkForPrimeNumbers("5")).toBe("Invalid");
});
