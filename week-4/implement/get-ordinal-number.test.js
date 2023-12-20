// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

/*function getOrdinalNumber() {
  return "1st";
}

test("converts 1 to an ordinal number", function () {
  const input = 1;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "1st";

  expect(currentOutput).toBe(targetOutput);
});

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});  */

function getOrdinalNumber(number) {
  const lastTwoDigits = number % 100; // Get last two digits
  const lastDigit = number % 10; // Get last digit

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return number + "th";
  } else if (lastDigit === 1) {
    return number + "st";
  } else if (lastDigit === 2) {
    return number + "nd";
  } else if (lastDigit === 3) {
    return number + "rd";
  } else {
    return number + "th";
  }
}

// Jest test cases
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("works for any number ending in 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("works for any number ending in 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(62)).toBe("62nd");
});
test("works for any number ending in 4 or 5", () => {
  expect(getOrdinalNumber(5)).toBe("5th");
  expect(getOrdinalNumber(24)).toBe("24th");
  expect(getOrdinalNumber(84)).toBe("84th");
});
