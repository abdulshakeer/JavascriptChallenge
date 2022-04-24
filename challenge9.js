function isNegative(number){
    if(number < 0){
        return number;
    }
    else{
        return number * -1;
    }
}

console.log(isNegative(-1));
console.log(isNegative(2));