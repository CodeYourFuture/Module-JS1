function repeat(str, count){
    if(count < 0){
        return "negative counts are not valid";
}
else if (str.repeat(count) !== '') {
        return str.repeat(count);
}
return ;
};
//console.log(repeat("Bgft", -8)) 

module.exports = repeat;
