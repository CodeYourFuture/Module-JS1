// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(number){
    if( typeof number==='number' && number>1){
        for(let i=2;i<=Math.floor(number/2);i++){
            if(number%i===0){
                return `${number} is not a prime number`;
            }
        }
        
    return `${number} is prime`
    }
    else if(typeof number==='number'&& number===1) {
        return `${1} is not a prime number` ;
    }

    else return 'enter a valid value' ;
        
    
    
}

// there are some ways that code could to be optimized a bit more in execution time , like if thr last digit is even or 5 
//the number is not prime or if the sum of the digit is divideable to 3 it's not prime as well. it's useful for larg numbers;
// but this was the easiest way

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(11));
console.log(isPrime(true));
console.log(isPrime('g'));
console.log(isPrime(2347));
console.log(isPrime(56387375173));

