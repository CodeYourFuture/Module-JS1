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
const previousPassword = [];

function passwordValidator(password) {
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const capLetter = letter.toUpperCase();
  const num = "0123456789";
  const symbol = ["!", "#", "$", "%", ".", "*", "&"];

  let letPass,
    capPass,
    numPass,
    symPass = false;
  if (password.length >= 5) {
    for (i = 0; i < letter.length; i++) {
      if (password.includes(letter[i])) {
        letPass = true;
        break;
      }
    for (m = 0; m < capLetter.length; m++)
      if (password.includes(capLetter[m])) {
        capPass = true;
        break;
      }
    }
    for (j = 0; j < num.length; j++) {
      if (password.includes(num[j])) {
        numPass = true;
        break;
      }
    }
    for (k = 0; k < symbol.length; k++) {
      if (password.includes(symbol[k])) {
        symPass = true;
        break;
      }
    }
    if (letPass == true && capPass == true && numPass == true && symPass == true){
        if(!previousPassword.includes(password)){
            previousPassword.push(password);
            return "Congratulations! Password accepted";
        }
        return "Rejected! Password has been used before";
        
    }return "Try again! Character conditions not met.";
  }
  return "Oops! Password must be longer than 5";
}

// Using jest to test
test ("Validates if password meets criteria", function (){

    expect(passwordValidator("W&m*/")).toBe("Try again! Character conditions not met.");
    expect(passwordValidator("W2&m*/")).toBe("Congratulations! Password accepted");
    expect(passwordValidator("o&m*")).toBe("Oops! Password must be longer than 5");
    expect(passwordValidator("Pm3oP781")).toBe("Try again! Character conditions not met.");
    expect(passwordValidator("W2&m*/")).toBe("Rejected! Password have been used before");
    expect(passwordValidator("Pm3%P781")).toBe("Congratulations! Password accepted");
    expect(passwordValidator("PM3%P781")).toBe("Try again! Character conditions not met.");
});

// check conditions in the console
console.log(passwordValidator("W&m*r/"));
console.log(passwordValidator("W2&m*2/"));
console.log(passwordValidator("o&*"));
console.log(passwordValidator("Pn3oP781"));
console.log(passwordValidator("W3&m*/"));
console.log(passwordValidator("Qm3%P781"));
console.log(passwordValidator("NM3%P781"));


