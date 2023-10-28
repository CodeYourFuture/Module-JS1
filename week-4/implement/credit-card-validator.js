function cardValidator(creditCard) {
    
  let myCard = [];//the empty array was created to store values and also for modification 

  for (i = 0; i < String(creditCard).length; i++) {//for i = 0, and if i is less than creditCard. The credit was converted to string because ".length" does not work for integers. 
    myCard.push(Number(String(creditCard)[i]));// ".push" is used to populate the array by converting the index of CreditCard first to string and then back to number. this is done to avoid concatenation.
  }
  if (myCard.length !== 16) {
    return false;
  }
  let validCard = true;
  for (i = 0; i < myCard.length; i++) {
    if(myCard[i] !== myCard[0]){
        validCard = false;
    }
  }
  if (creditCard % 2 !== 0) {// if statement was used to check if creditCard has a remainder and if it does, it should return false.
    return false;
  }
  let sum = 0;//here the value of sum was declared as 0 because we want it to start adding to 0 
  for (i = 0; i < myCard.length; i++) {//this is to iterate through the whole length of myCard array
    sum += myCard[i];// it should add myCard[i] to sum
  }
  if (sum <= 16) {//the conditional statement was used to check if sum is greater than 16 and if not it should return false
    return false;
  }
  return true;
}
console.log(cardValidator(111111111111115), 1);
console.log(cardValidator(1111111111111132), 2);
console.log(cardValidator(1111111111111137), 3);
console.log(cardValidator(1111111111111111), 4);
console.log(cardValidator("11111111111G11138"), 5);