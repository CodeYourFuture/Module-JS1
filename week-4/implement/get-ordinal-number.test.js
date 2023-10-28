// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  let stringedNum = num.toString();
  if (typeof num==='number' && num>=1 && Number.isInteger(num)){
    if(stringedNum[stringedNum.length-1]==='1' && stringedNum!='11')
    return stringedNum+'st';
    }
    else if (stringedNum[stringedNum.length-1]==='2' &&stringedNum!='12'){
      return stringedNum+'nd';
    }
    else if (stringedNum[stringedNum.length-1]==='3' &&stringedNum!='13'){
      return stringedNum+ 'rd';
    } else {
      return stringedNum+'th';
    }
  else{
  return value must be integar
  }
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});//-->The test function is part of the Jest API, a function we use to perform a particular task.using test to create a test case


