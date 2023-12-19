// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  if (!Number.isInteger(num) || num < 1) {
    return "Invalid input";
  }

  const lastDigit = num % 10;

  let suffix;
  if (lastDigit === 1 && num !== 11) {
    suffix = "st";
  } else if (lastDigit === 2 && num !== 12) {
    suffix = "nd";
  } else if (lastDigit === 3 && num !== 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return `${num}${suffix}`;
}

test("converts any number to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(-36 / -12)).toBe("3rd");
  expect(getOrdinalNumber(0)).toBe("Invalid input");
  expect(getOrdinalNumber(-26)).toBe("Invalid input");
  expect(getOrdinalNumber(3.14)).toBe("Invalid input");
  expect(getOrdinalNumber(4 / 5)).toBe("Invalid input");
  expect(getOrdinalNumber("Hello")).toBe("Invalid input");
});
