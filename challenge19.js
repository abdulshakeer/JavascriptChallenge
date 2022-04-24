function nospace(str){
    const array = str.split(" ");
    let newarr =[];
    for(let i =0;i < array.length;i++){
        const trimmedarray = array[i].trim();
        newarr.push(trimmedarray);
    }
    const finalstr = newarr.join("");
    return finalstr;
}

console.log(nospace("Hii  I am abdul shakir"));