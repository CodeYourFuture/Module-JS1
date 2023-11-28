function isNumber(cardNumber) {
  if (!isNaN(cardNumber)) {
    return true;
  } return 'All digits should be numbers';
}

function is16DigitsLong(cardNumber) {
  if (cardNumber.length == 16) {
    return true
  } return 'Card number should be 16 digits long';
}

function isLastDigitEven(cardNumber) {
  if (cardNumber.slice(-1) % 2 === 0) {
    return true
  } return 'The last digit should be even';
}

function isAnyDigitDifferent(cardNumber) {
  if (cardNumber.split('').every((digit) => digit === cardNumber[0])) {
    return 'At least one digit should be different from the others';
  } return true;
}

function isSumDigitsBiggerThan16(cardNumber) {
  const sumDigits = cardNumber.split('').reduce((partialSum, digit) => partialSum + digit, 0);
  if (sumDigits > 16) {
    return true;
  } return 'Sum of digits should be bigger than 16';
}

function cardValidator(cardNumber) {
  const isNumber = isNumber(cardNumber);
  const is16DigitsLong = is16DigitsLong(cardNumber);
  const isLastDigitEven = isLastDigitEven(cardNumber);
  const isAnyDigitDifferent = isAnyDigitDifferent(cardNumber);
  const isSumDigitsBiggerThan16 = isSumDigitsBiggerThan16(cardNumber);

  if (isNumber && is16DigitsLong && isLastDigitEven && isAnyDigitDifferent && isSumDigitsBiggerThan16) {
    return true
  } else {
    const errors = ['Invalid Card Number'];
    typeof (isNumber) == 'string' ? errors.push(isNumber) : null;
    typeof (is16DigitsLong) == 'string' ? errors.push(is16DigitsLong) : null;
    typeof (isLastDigitEven) == 'string' ? errors.push(isLastDigitEven) : null;
    typeof (isAnyDigitDifferent) == 'string' ? errors.push(isAnyDigitDifferent) : null;
    typeof (isSumDigitsBiggerThan16) == 'string' ? errors.push(isSumDigitsBiggerThan16) : null;
    const errorMessage = errors.join('. ');
    return errorMessage
  }
}

test('All 16 digits are numbers', () => {
  expect(isNumber(4242424242424242)).toBe(true);
  expect(isNumber('4242424242424242')).toBe('All digits should be numbers');
  expect(isNumber(123456789876543 + 'a')).toBe('All digits should be numbers');
})

/* test('It is 16 digits long', () => {
  expect(isNumber('4242424242424242')).toBe(true);
})

test('At least 1 digit different of the others', () => {

})

test('Final digit is even', () => {

})

test('Sum of all the digits greater than 16', () => {

})

test('The card is valid', () => {

}) */