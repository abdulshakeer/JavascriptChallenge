function repeatstr(number,str){
    let start ='';
    for(let i =0;i < number;i++){
        start = start + str
    }
    return start;
}

console.log(repeatstr(6,"hello"));