// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number){

    if (number % 10 === 1 && number % 100 !== 11) {

        return number + "st";
    }

    else if ( number % 10 === 2 && number % 100 !==12){

        return number + 'nd';
    }

    else if (number % 10 === 3 && number %100 !== 13){

        return number + 'rd'
    }

    else {

        return number + 'th'
    }
}

console.log (getOrdinalNumber(1))


test('Returns ordinal number for 1', () => {
    expect(getOrdinalNumber(1)).toBe("1st");
});

test('Returns ordinal number for 2', () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
});

test('Returns ordinal number for 3', () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
});

test('Returns ordinal number for other numbers', () => {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(100)).toBe("100th");
});