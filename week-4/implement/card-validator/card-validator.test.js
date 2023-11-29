// Check if the card number is a number
function isNumber(cardNumber) {
  if (!isNaN(cardNumber)) {
    return true;
  } return 'All digits should be numbers';
}

// check if the card number has 16 digits
function is16DigitsLong(cardNumber) {
  if (cardNumber.toString().length == 16) {
    return true
  } return 'Card number should be 16 digits long';
}

// check if the card number ends with a even number
function isLastDigitEven(cardNumber) {
  if (Number(cardNumber.toString().slice(-1)) % 2 === 0) {
    return true
  } return 'The last digit should be even';
}

// check if the card number has at least on digit different of the others
function isAnyDigitDifferent(cardNumber) {
  if (cardNumber.toString().split('').every((digit) => digit === cardNumber.toString()[0])) {
    return 'At least one digit should be different from the others';
  } return true;
}

// check if the sum of all card-number's digits is greater than 16
function isSumGreaterThan16(cardNumber) {
  cardNumberString = cardNumber.toString();
  let cardNumberArray = []
  for (let index = 0; index < cardNumberString.length; index++) {
    cardNumberArray.push(Number(cardNumberString[index]))
  }
  const sumDigits = cardNumberArray.reduce((partialSum, digit) => partialSum + digit, 0);
  if (!isNaN(Number(sumDigits)) && sumDigits > 16) {
    return true;
  } return 'Sum of digits should be bigger than 16';
}

// general function that calls all the others and generate the return
function cardValidator(cardNumber) {
  const absoluteCardNumber = Math.abs(cardNumber);
  const isNumberValue = isNumber(absoluteCardNumber);
  const is16DigitsLongValue = is16DigitsLong(absoluteCardNumber);
  const isLastDigitEvenValue = isLastDigitEven(absoluteCardNumber);
  const isAnyDigitDifferentValue = isAnyDigitDifferent(absoluteCardNumber);
  const isSumGreaterThan16Value = isSumGreaterThan16(absoluteCardNumber);

  if (isNumberValue === true && is16DigitsLongValue === true && isLastDigitEvenValue === true && isAnyDigitDifferentValue === true && isSumGreaterThan16Value === true) {
    return true
  } else if (isNaN(isNumberValue)) {
    return `Invalid Card Number. ${isNumberValue}`
  } else {
    const errors = ['Invalid Card Number'];
    typeof (is16DigitsLongValue) == 'string' ? errors.push(is16DigitsLongValue) : null;
    typeof (isLastDigitEvenValue) == 'string' ? errors.push(isLastDigitEvenValue) : null;
    typeof (isAnyDigitDifferentValue) == 'string' ? errors.push(isAnyDigitDifferentValue) : null;
    typeof (isSumGreaterThan16Value) == 'string' ? errors.push(isSumGreaterThan16Value) : null;
    const errorMessage = errors.join('. ');
    return errorMessage
  }
}

test('All 16 digits are numbers', () => {
  expect(isNumber(424242422424242)).toBe(true);
  expect(isNumber('1234567898')).toBe(true);
  expect(isNumber(123456789876543 + 'a')).toBe('All digits should be numbers');
  expect(isNumber('12345678987aa433')).toBe(`All digits should be numbers`)
})

test('It is 16 digits long', () => {
  expect(is16DigitsLong(1234567898765432)).toBe(true);
  expect(is16DigitsLong('12345678987654ac')).toBe(true);
  expect(is16DigitsLong(123456789876)).toBe('Card number should be 16 digits long');
  expect(is16DigitsLong('128879123456789876453')).toBe('Card number should be 16 digits long');
})

test('Final digit is even', () => {
  expect(isLastDigitEven(1234567898765432)).toBe(true);
  expect(isLastDigitEven(1234567898765433)).toBe('The last digit should be even');
  expect(isLastDigitEven('1234567898765433')).toBe('The last digit should be even');
})

test('At least 1 digit different of the others', () => {
  expect(isAnyDigitDifferent(1234567898765432)).toBe(true);
  expect(isAnyDigitDifferent(123456789872)).toBe(true);
  expect(isAnyDigitDifferent('as2shd1235l3965')).toBe(true);
  expect(isAnyDigitDifferent('11111111111111111')).toBe('At least one digit should be different from the others');
  expect(isAnyDigitDifferent(2222222222222222)).toBe('At least one digit should be different from the others');
  expect(isAnyDigitDifferent('bbbbbbbbbbbbbbbbbb')).toBe('At least one digit should be different from the others');
})

test('Sum of all the digits greater than 16', () => {
  expect(isSumGreaterThan16(1234567898765432)).toBe(true);
  expect(isSumGreaterThan16("1234567898765433")).toBe(true);
  expect(isSumGreaterThan16(1001120000001111)).toBe('Sum of digits should be bigger than 16')
  expect(isSumGreaterThan16("12345a898765433")).toBe('Sum of digits should be bigger than 16')
})

test('The card is valid', () => {
  expect(cardValidator(1234567898765432)).toBe(true)
  expect(cardValidator('1234567898765432')).toBe(true)
  expect(cardValidator('12345678987aa433')).toBe(`Invalid Card Number. All digits should be numbers`)
  expect(cardValidator(424242422424242)).toBe(`Invalid Card Number. Card number should be 16 digits long`)
  expect(cardValidator(1234567898744433)).toBe(`Invalid Card Number. The last digit should be even`)
  expect(cardValidator(8888888888888888)).toBe(`Invalid Card Number. At least one digit should be different from the others`)
  expect(cardValidator(1001120000001112)).toBe(`Invalid Card Number. Sum of digits should be bigger than 16`)
  expect(cardValidator(111111111111111)).toBe(`Invalid Card Number. Card number should be 16 digits long. The last digit should be even. At least one digit should be different from the others. Sum of digits should be bigger than 16`)
})