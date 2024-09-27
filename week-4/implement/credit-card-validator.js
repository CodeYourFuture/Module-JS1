

function creditCardValidator(validator){
  const char = Array.from(new Set(validator.toString()));
  var last = +validator.toString().split('').pop();
  const st = validator.toString()
  const sum = st.split('').reduce((total, digit) => total + parseInt(digit), 0);

  if (validator.length < 16) {
    return false;
  }
    else if (!/^\d+$/.test(validator)){
      return false;
    }

    else if (char.length < 2){
      return false;
    }
    else if (last % 2 !== 0){
      return false
    }
  else if (sum < 16) {
    return false;
}

    else{

  return true;
}
}
console.log(creditCardValidator(6666666166667788));





