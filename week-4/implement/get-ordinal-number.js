function getOrdinalNumber(num){
	let ordinal = +num.toString().split('').pop();
  if (num == "11"){
    return `${num}th`;
  }
  else if (ordinal== "1"){
    return `${num}st`;
  }
  else if ( ordinal == "2"){
    return `${num}nd`;
  }
  else if (ordinal == "3"){
    return `${num}rd`;
  }
  else {
    return `${num}th`;
  }
}
//console.log(getOrdinalNumber(21))

module.exports = getOrdinalNumber;