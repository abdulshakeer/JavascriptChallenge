function positive(arr){
    let sum = 0;
    for(let i =0;i < arr.length;i++){
        if(arr[i] > 0){
            sum = sum + arr[i]
        }
    }
    return sum;
}
console.log(positive([1,-3,4,6,-3]));
