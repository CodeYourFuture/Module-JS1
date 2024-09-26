// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(input){
    const con = input.length -1
    const num = Number(input.charAt(con));
    if(input == 0){
        return "ground floor";
    }
    if(input == 1){
        return `${input}st`;
    }
    if(num == 1 || num == 0 || num >= 4){
        return `${input}th`;
    }
    if(num == 2){
        return `${input}nd`;
    }
    if(input == 3){
        return`${input}rd`;
    }
   
}
// console.log(getOrdinalNumber('22'));
// console.log(getOrdinalNumber('0'));
// console.log(getOrdinalNumber('44'));
// console.log(getOrdinalNumber('5'));
test("converts '1' to '1st'", function () {
    const input = '1';
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "1st";
  
    expect(currentOutput).toBe(targetOutput);
});
