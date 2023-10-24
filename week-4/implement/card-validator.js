function cardValidator(cardNmuber){

    // declaring necessary variables 
    let stringedCardNumber=cardNmuber.toString();

    const cardNumberHolderArray=stringedCardNumber.split('');

    let cardNumberLength=stringedCardNumber.length;
    
    let isEven=Number(stringedCardNumber[stringedCardNumber.length-1])%2;


    // creating a set from the `cardNumberHolderArray` , we will use 
    // length of the set to make sure it has at least more than two different digits.
    const cardNmuberSet=new Set(stringedCardNumberHolderArray);  
    
    // underneath loop will calculate sum of digits of the given param
    let sumOfDigits=0;
    for(let i=0;i<cardNumberHolderArray.length;i++){
        sumOfDigits=sumOfDigits+Number(cardNumberHolderArray[i]);

    }
    if(
        typeof cardNmuber==='number' &&
        cardNumberLength===16 &&
        isEven===0 &&
        cardNmuberSet.size>=2 &&
        sumOfDigits>16
    )
    {
        return true;
    }
    else return false;
// console.log(sumOfDigits);
// console.log(stringedCardNumber);
// console.log(cardNumberHolderArray);
// console.log(cardNumberLength);
// console.log(cardNmuberSet);
    
}

console.log(cardValidator(9999777788880000));
console.log(cardValidator(6666666666661666));
//console.log(cardValidator(a92332119c011112));
console.log(cardValidator(4444444444444444));
console.log(cardValidator(1111111111111110));
console.log(cardValidator(6666666666666661));


