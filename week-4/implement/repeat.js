function repeat(str, count){
if (count >= 1) {
        return str.repeat(count);
}else if(count < 0){
        return "negative counts are not valid";
}
else{
        return "";
}
};
console.log(repeat("Bgft", 0)) 

module.exports = repeat;
