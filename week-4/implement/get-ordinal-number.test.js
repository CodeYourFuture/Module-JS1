// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(number) {
    if(number % 10 === 1){
        if (number === 11) {
          return `${number}th`;
        }
        return `${number}st`;
    }
    if (number % 10 === 2) {
        if (number === 12) {
            return `${number}th`;
        }
        return `${number}nd`;
    }
    
}

test("converts number ending in 1 to ordinal number", function () {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(91)).toBe("91st");
}) 
test("converts number ending in 2 to ordinal number", function () {
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(62)).toBe("62nd");
}); 
