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


