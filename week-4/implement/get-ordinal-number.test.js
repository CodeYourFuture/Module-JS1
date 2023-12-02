// In this week's prep, we started implementing getOrdinalNumber
function getOrdinalNumber(num) {
  if (num % 10 === 1) {
    if (num === 11) {
      return "11th";
    }
    return `${num}st`;
  }
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
