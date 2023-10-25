/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
// password-validator.js

// Function to check if the password is valid

function passwordValidator(passwords){
    const passwordHolder=[];
    for (let i = 0; i < passwords.length; i++) {
        const password = passwords[i]; 
    // const validChar=/^[A-Za-z0-9!$%.&*]+$/.test(password);
    let gotUpper=/[A-Z]/.test(password);
    let gotLower=/[a-z]/.test(password);
    let gotDigit=/[0-9]/.test(password);
    let gotSymbol=/[!$%&*.#]/.test(password);
    const passwordLength=password.length;
    let uinquePassword=true;
    for(let j=0; j<i;j++){
        if(passwords[j]===password){

        uinquePassword =false;

        }else uinquePassword =true;

    }
    // const isUniquePassword = passwords.indexOf(password) === i; -->
    // const uinquePassword=!passwordHolder.includes(password);
    if(
        typeof password==='string' &&
        passwordLength>5 &&
        // validChar &&
        uinquePassword&& 
        gotUpper &&
        gotLower &&
        gotDigit &&
        gotSymbol 
    ){
        passwordHolder.push(true);
        
    }
    else passwordHolder.push(false);
}
    return passwordHolder;
}


test("check if the array of password is valid", function () {
const passwords= ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tT37."];  
    expect(passwordValidator(passwords)).toStrictEqual([true, true, true, false, false]);
});
test("check if the array of password is valid", function () {
    const passwords= ["Eop45!", "Eop45!", "dvyy87!5", "qwb=j76%", "tytT3729."];  
    expect(passwordValidator(passwords)).toStrictEqual([true, false, false, false, true]);
    });



// test("check if it is a valid password", function () {
//     const currentOutput = isValidPassword("HiMy01233455");
//     const targetOutput = false;
//     expect(currentOutput).toBe(targetOutput);
// });
// test("check a valid password", function () {
//     const currentOutput = isValidPassword("El4565@m");
//     const targetOutput = true;
//     expect(currentOutput).toBe(targetOutput);
// });








