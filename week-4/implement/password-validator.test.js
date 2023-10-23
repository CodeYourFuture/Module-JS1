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
function isValidPassword(password, previous) {
    const number = "0123456789";
    const symbol = "!#$%*&.";
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

let hasPasswordLength=false
    if (password.length > 5) {
        hasPasswordLength=true;
    }
    let hasNumber = false;
    for (let i = 0; i < number.length; i++) {
        if (password.includes(number[i])) {
            hasNumber = true;
        }
    }
    let hasSpecialChar = false;
    for (let i = 0; i < symbol.length; i++) {
        if (password.includes(symbol[i])) {
            symbol = true;
        }
    }
    let hasCaps = false;
    for (let i = 0; i < caps.length; i++) {
        if (password.includes(caps[i])) {
            hasCaps = true;
        }

    }
    let hasLowerCase = false;
    for (let i = 0; i < lowercase.length; i++) {
        if (password.includes(lowercase[i])) {
            hasLowerCase = true;
        }
    }
    let hasPreviousPassword = false;
    if (!previous.includes(password)) {
        hasPreviousPassword = true;
    }
    if (hasPasswordLength==true && hasCaps==true && hasLowerCase==true && hasNumber==true && hasPreviousPassword==true && hasSpecialChar==true) {
        return true;
    } else {
        return false;
    }

}

const previous= ["Password1!", "SecurePass123#", "StrongPwd%456","ADbn!jk5"];


test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("bdhbhbd", previous);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("SecurePWUV123#", previous);
    const targetOutput = true;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("ADcn!jk5",previous );
    const targetOutput = true;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("adT",previous );
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("*****", previous);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("*****",previous);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});

test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("HiMy01233455",previous);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});
test("Check if it is a valid password", function () {
    const currentOutput = isValidPassword("5Adniya&",previous);
    const targetOutput = true;
    expect(currentOutput).toBe(targetOutput);
});
