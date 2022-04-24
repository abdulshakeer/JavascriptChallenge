function map(arr){
    const result = arr.map((arrayitem)=>{
        return arrayitem * 2;
    });
    return result
}

console.log(map([2,4,6]));