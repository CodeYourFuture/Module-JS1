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
function checkValidPassword(password){
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let symbol = ["!", "#", "$", "%", ".", "*", "&"];
    for(let i = 0; i < password.length; i++ ){
        if () {
          
        }
    }

}
console.log(checkValidPassword("Zahide3%"));


// let password = "Zahide3%";

// function numberCheck(password) {
//   let number = ["0", "1", "2", "3"];
//   let index = 0;
//   while (index < number.length) {
//     if (password.includes(number[index])) {
//       return true;
//     } else {
//       return false;
//     }
//     index++;
//   }
// }

// console.log(numberCheck(password));
