function averagearray(score){
    const count = score.length;
    let sum = 0;
    for(let i = 0;i<count;i++){
        sum = sum + score[i];
    }
    const avg = sum/count;
    const rounded = Math.floor(avg)
    return rounded
}


console.log(averagearray([5,6,7,8,9]),3);
