// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const { default: expect } = require("expect");

function isPrime(num){
    if( typeof num==='number' && num>1 && Number.isInteger(num)){
        for(let i=2;i<=Math.floor(num/2);i++){
            if(num%i===0){
                return `${num} is not a prime num`;
            }
        }
        
        return `${num} is prime`
    }
    else if(typeof num==='number'&& num===1) {
        return `${1} is not a prime num` ;
    }

    else return 'enter a valid value' ;
        
    
    
}

// there are some ways that code could to be optimized a bit more in execution time , like if the last digit is even or 5 
//the num is not prime or if the sum of the digit is divideable to 3 it's not prime as well. it's useful for larg nums;
// but this was the easiest way

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(11));
// console.log(isPrime(true));
// console.log(isPrime('g'));
// console.log(isPrime(2347));
// // console.log(isPrime(56387375173));

test('should return 2 is prime',()=>{
    expect(isPrime(2)).toBe('2 is prime');
});

test('should return 7 is prime',()=>{
    expect(isPrime(7)).toBe('7 is prime');
});

test('should return 12 is not prime',()=>{
    expect(isPrime(12)).toBe('12 is not a prime num');
});

test('should return 49 is not prime',()=>{
    expect(isPrime(49)).toBe('49 is not a prime num');
});

