// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback


test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(32)).toBe("32nd");
  expect(getOrdinalNumber(43)).toBe("43rd");
});
