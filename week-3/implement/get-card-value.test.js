const { getCardValue } = require('./get-card-value');

test('card value for 3 should be 3', () => {
  expect(getCardValue('3')).toBe(3);
});

test('card value for Q should be 10', () => {
  expect(getCardValue('Q')).toBe(10);
});

test('card value for A should be 11', () => {
  expect(getCardValue('A')).toBe(11);
});

test('card value for invalid values should return an error object', () => {
  expect(getCardValue('g')).toBeInstanceOf(Error);
});
