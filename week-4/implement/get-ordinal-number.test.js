// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber() {
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
});
