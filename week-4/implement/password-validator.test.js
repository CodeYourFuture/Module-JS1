/* 
passwordword Validation

Write a program that should check if a passwordword is valid
and returns a boolean

To be valid, a passwordword must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous passwordword in the passwordwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function passwordwordValidator(password){
     const passwordHolder=[];
    let gotUpper=/[A-Z]/.test(password);
    let gotLower=/[a-z]/.test(password);
    let gotDigit=/[0-9]/.test(password);
    let gotSymbol=/["!", "#", "$", "%", ".", "*", "&"]/.test(password);
    let validChars=/^[A-Za-z0-9!#$%.*&]+$/.test(password);   // this line has been written by chatGPT
    let passwordLength=password.length;

    if(
        typeof password ==='string' &&
        gotUpper &&
        gotLower &&
        gotDigit &&
        gotSymbol &&
        validChars &&
        passwordLength>5 &&
        !passwordHolder.includes(password)
    ){
        passwordHolder.push(password);
        return true;
    }
    else return false;
}

console.log(passwordwordValidator('12Ghas%$!'));
console.log(passwordwordValidator('12AHbcd*&^5'));
console.log(passwordwordValidator('1265432'));
console.log(passwordwordValidator(''));
console.log(passwordwordValidator('AAcc11%$'));
console.log(passwordwordValidator('Anc12))'));