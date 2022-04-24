function arrayplusarray(array1,array2){
    let sum = 0;
    for(let i =0;i< array1.length;i++){
        const array1Value = array1[i];
        const array2Value = array2[i];
        const addarray = array1Value + array2Value;
        sum = sum + addarray;
    }
    return sum;
}


console.log(arrayplusarray([1,2,3],[4,5,6]));