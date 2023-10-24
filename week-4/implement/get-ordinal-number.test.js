// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
  if (num % 10 === 1 && num % 100 != 11) {
    return `${num}st`;
  } else if (num % 10 === 2 && num % 100 != 12) {
    return `${num}nd`;
  } else if (num % 10 === 3 && num % 100 != 13) {
    return `${num}rd`;
  }
}

test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(32)).toBe("32nd");
  expect(getOrdinalNumber(43)).toBe("43rd");
});
