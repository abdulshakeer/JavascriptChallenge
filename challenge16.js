// We can simply use eval inbuilt function In a single line
function basicop(o,a,b){
    return eval(a+o+b)
}
console.log(basicop("*",2,3));
console.log(basicop("+",2,3));
console.log(basicop("-",2,3));
console.log(basicop("/",2,3));

function basic(oper,value1,value2){
    let result;
    switch(oper){
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '*':
            result = value1 * value2
            break;
        case '-':
            result = value1 / value2
            break;
    }
    return result
}

console.log(basic("+",2,3));