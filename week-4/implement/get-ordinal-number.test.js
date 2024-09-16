// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
//.............................................
//ANSWER



// getOrdinalNumber(1); // returns "1st";
// getOrdinalNumber(2); // returns "2nd";
// getOrdinalNumber(6); // returns "6th";

function getOrdinalNumber(number) {
    const suffix = getSuffix(number);
    return `${number}${suffix}`;
  }
  
  function getSuffix(number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return 'th';
    }
  
    if (lastDigit === 1) {
      return 'st';
    } else if (lastDigit === 2) {
      return 'nd';
    } else if (lastDigit === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }


// new way of checking code using jest
test("converts 1 to an ordinal number", function () {
    const input = 6;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "6th";
  
    expect(currentOutput).toBe(targetOutput);
  });

  
