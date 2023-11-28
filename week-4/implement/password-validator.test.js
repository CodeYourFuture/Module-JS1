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
const regex = /[^\w\s']/g;
function passValidat(pass) {
    if (pass.length < 5) 
    {console.log("Password must be 5 or more");}
      
    else if(pass.search(/[a-z]/) < 0) 
    { console.log("Error: Password must contain at least one lowercase letter");}
      
    else if(pass.search(/[A-Z]/) < 0) 
    {console.log("Error: Password must contain at least one uppercase letter");} 
    
    else if(pass.search(/[0-9]/) < 0) {console.log("Error: Password must contain at least one number");} 
    
    else if(pass.search(regex) < 0) {console.log("Error: Password must contain at least one Symbol");}

    else {console.log("Valid!");}
      
  }
  passValidat("1a1*1F1");