function cardValidator(cardNumber) {
    let stringCardNumber= cardNumber.toString();
    let typeCardNumber=typeof cardNumber==='number';
    let lengthCardNumber = stringCardNumber.length ===16;
    const setOfCardNumber = new Set(stringCardNumber);
    const setSize = setOfCardNumber.size >=2;
    let sumOfDigit=0;
    for(i=0;i<stringCardNumber.length;i++){
        sumOfDigit+= Number(stringCardNumber[i]);

    }
    let evenDigit = Number(stringCardNumber[stringCardNumber.length-1])%2===0;
    if(typeCardNumber && 
       lengthCardNumber &&
       setSize &&
       sumOfDigit >16 &&
       evenDigit
        ){
            return true;

    }
    else {
        return false;

    }  

}

console.log(cardValidator(4444444444444444));
console.log(cardValidator(9999777788880000));







