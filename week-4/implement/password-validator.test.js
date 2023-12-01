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

function checkPassword(str) {
    const hasUppercase = /[A-Z]/.test(str);
    const haslowerCase = /[a-z]/.test(str);
    const hasNumber = /\d/.test(str);
    const hasChar = /[!#$%.&*]/.test(str);
    if (hasUppercase && haslowerCase && hasNumber && hasChar && str.length >= 5) {
        return "password is valid";}
        else {return "password is not valid"}}
// console.log(checkPassword("Ba8*xyz9")); 
// console.log(checkPassword("fer"));
// console.log(checkPassword("fert56"));
// console.log(checkPassword("Fe8*"));
test("check if password contains all characters", function(){
    const str ="Fe34*";
    const currentOutput = checkPassword(str);
    const targetOutput = "password is valid";
    expect(currentOutput).toBe(targetOutput);
});