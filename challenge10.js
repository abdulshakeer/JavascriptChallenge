function smallestInteger(array){
    let smallest;
    for(let i =0;i < array.length;i++){
        const arraynum = array[i];
        if(i==0){
            smallest = arraynum;
        }
        if(arraynum < smallest){
            smallest = arraynum;
        }
    }
    return smallest;
}

console.log(smallestInteger([2,3,4,6,0]));