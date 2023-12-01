function isPrime(num){
const sq = Math.sqrt(num)
    for (let i = 2; i <= sq; i++){
            if (num % i == 0){
                return false;
            }
            
        }
         return true;
}
// console.log(isPrime(17));

module.exports = isPrime;
