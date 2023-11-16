// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  const lastDigit = num % 10;

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
test('returns the ordinal number with the suffix "st" for numbers ending with 1', () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(101)).toBe("101st");
});

test('returns the ordinal number with the suffix "nd" for numbers ending with 2', () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(102)).toBe("102nd");
});

test('returns the ordinal number with the suffix "rd" for numbers ending with 3', () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(103)).toBe("103rd");
});

test('returns the ordinal number with the suffix "th" for other numbers', () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(25)).toBe("25th");
});
