// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  let last2Digit = num.toString().slice(-2);
  if (last2Digit === "11" || last2Digit === "12" || last2Digit === "13") {
    return `${num}th`;
  }

  let lastDigit = num.toString().slice(-1);
  if (lastDigit === "1") {
    return `${num}st`;
  }
  if (lastDigit === "2") {
    return `${num}th`;
  }
  if (lastDigit === "3") {
    return `${num}rd`;
  }
  return `${num}th`;
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(33)).toBe("33rd");
  expect(getOrdinalNumber(19)).toBe("19th");
  expect(getOrdinalNumber(113)).toBe("113th");
});