function passwordValidator(password){
    const oldPassword = '';
    if (password.length > 5){
        return false;
    }
    else if (!/[A-Z]/.test(password)){
        return false;
    }else if(!/[a-z]/.test(password)){
        return false;
    }else if(!/[0-9]/.test(password)){
        return false;
    }else if(password == "!" || password == "$" || password == "*" || password == "." || password == "#" || password == "&" || password == "%"){
        return false;
    }
    else if (oldPassword.includes(password)){
        return false
    }
    
    else {
        return true;
    }

}

const oldPassword = ("bbds", "flbe8")
const password = ("khadIja2")

//console.log(passwordValidator('g8gfd'))


module.exports = passwordValidator;