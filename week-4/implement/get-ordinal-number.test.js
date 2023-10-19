// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number){
    if(typeof number==='number' 
    && number>0 && 
    Number.isInteger(number))
    {
        let stringedNumber=number.toString();
        if(stringedNumber[stringedNumber.length-1]==='1' && number!=11){
            return stringedNumber+'st';
        }
        else if(stringedNumber[stringedNumber.length-1]==='2' && number!=12){
            return stringedNumber+'nd';
        }
        else if(stringedNumber[stringedNumber.length-1]==='3' && number!=13){
            return stringedNumber+'rd';
        }
        else return stringedNumber+'th';
    }

    else return 'Enter a valid positive integer number '
    
    

}
console.log(getOrdinalNumber(14));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(10));
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(122));
console.log(getOrdinalNumber(33));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber('h'));
console.log(getOrdinalNumber(false));
console.log(getOrdinalNumber('3'));