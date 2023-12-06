// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number) {
    if (number === 11){
        return `${number}th`;
    }
    if (number%10 === 1) {
        return `${number}st`;
    }
}

test("works for any number ending in 1", function () {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(21)).toBe("21st");
  });
