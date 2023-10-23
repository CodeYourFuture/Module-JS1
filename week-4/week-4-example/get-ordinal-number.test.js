function getOrdinalNumber(num) {
  if (num===11){
    return `${num}th`;
  }
  return `${num}st`;
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});//-->The test function is part of the Jest API, a function we use to perform a particular task.using test to create a test case



