// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num){
    if (num < 2){
        return false;
    }
    for (i = 2; num <= num**0.5; i++){
        if (num%i === 0){
            return false;
        } 
    }
    return true;
}

console.log(isPrime(16));

test ("verify if prime or not", function (){
    const currentOutput = isPrime(13);
    const targetOutput = true;

    expect(currentOutput).toBe(targetOutput);
});