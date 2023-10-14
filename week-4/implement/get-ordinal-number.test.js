// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(n) {
    if (n === 1 || n === 21 || n === 31) {
       return n + 'st';
    }
    if (n === 2 || n === 22) {
       return n + 'nd';
    }
    if (n === 3 || n === 23) {
       return n + 'rd';
    }
    return n + 'th';
   }
   
   // Test cases
   test('getOrdinalNumber should return the correct ordinal number', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
    expect(getOrdinalNumber(2)).toBe('2nd');
    expect(getOrdinalNumber(3)).toBe('3rd');
    expect(getOrdinalNumber(4)).toBe('4th');
    expect(getOrdinalNumber(5)).toBe('5th');
    expect(getOrdinalNumber(6)).toBe('6th');
    expect(getOrdinalNumber(7)).toBe('7th');
    expect(getOrdinalNumber(8)).toBe('8th');
    expect(getOrdinalNumber(9)).toBe('9th');
    expect(getOrdinalNumber(10)).toBe('10th');
    expect(getOrdinalNumber(11)).toBe('11th');
    expect(getOrdinalNumber(12)).toBe('12th');
    expect(getOrdinalNumber(13)).toBe('13th');
    expect(getOrdinalNumber(14)).toBe('14th');
    expect(getOrdinalNumber(15)).toBe('15th');
    expect(getOrdinalNumber(16)).toBe('16th');
    expect(getOrdinalNumber(17)).toBe('17th');
    expect(getOrdinalNumber(18)).toBe('18th');
    expect(getOrdinalNumber(19)).toBe('19th');
    expect(getOrdinalNumber(20)).toBe('20th');
    expect(getOrdinalNumber(21)).toBe('21st');
    expect(getOrdinalNumber(22