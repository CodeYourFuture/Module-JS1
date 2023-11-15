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
function isPasswordvalid () {
  if (password.length<5) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
}
if (!/[\d]/.test(password)) {
    return false;
  }
if (!/[!#$%.&*]/.test(password)) {
    return false;
  }
  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}
const passwords = ["Passw0rd!", "Secure123", "MyP@ssw0rd"];
const newPassword = "NewP@ssw0rd";

console.log(isPasswordvalid(newPassword, passwords));