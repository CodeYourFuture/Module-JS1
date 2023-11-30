

// This is a function that will  validate the credit card number 
function isCreditCardValid(cardNumber) {
    // Here we are checking if the  card number is a string; if not, we are converting it to a string
    let cleanedCardNumber = (typeof cardNumber === 'string') ? cardNumber.replace(/[^0-9]/g, '') : '';

    // Here we are checking  if the cardNumber meets the specified criteria for validity
    return (
        cleanedCardNumber.length === 16 &&
        hasAtLeastTwoDifferentDigits(cleanedCardNumber) &&
        isFinalDigitEven(cleanedCardNumber) &&
        isSumGreaterThan16(cleanedCardNumber)
    );
}

// This is a helper function to check if there are at least two different digits in the number
function hasAtLeastTwoDifferentDigits(numbers) {
    // then it converts the string into an array of unique numbers and check if the length is greater than or equal to 2
    return new Set(numbers.split('')).size >= 2;
}

// The helper function then  checks if the final digit is even
function isFinalDigitEven(numbers) {
    // it then converts the last digit to a number and checks if it's even
    return parseInt(numbers[numbers.length - 1], 10) % 2 === 0;
}

// our helper function is here to check if the sum of all numbers is greater than 16
function isSumGreaterThan16(numbers) {
    // it Calculates the sum of all digits and checks if it's greater than 16
    return numbers.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0) > 16;
}



//testing using npm test


test('Valid Credit Card Number', () => {
    const validCardNumber = '9999777788880000';
    expect(isCreditCardValid(validCardNumber)).toBe(true);
});

test('Invalid Credit Card Number (Invalid Characters)', () => {
    const invalidCardNumber = 'a92332119c011112';
    expect(isCreditCardValid(invalidCardNumber)).toBe(false);
});

test('Invalid Credit Card Number (One Type of Number)', () => {
    const invalidCardNumber = '4444444444444444';
    expect(isCreditCardValid(invalidCardNumber)).toBe(false);
});
