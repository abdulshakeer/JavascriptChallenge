function points(gamesarray){
    let totalpoint = 0;
    for(let i =0;i < gamesarray.length;i++){
        const value = gamesarray[i];
        const parts = value.split(":");
        const x = parts[0];
        const y = parts[1];
        if(x > y){
            totalpoint = totalpoint + 3;
        }
        else if(x === y){
            totalpoint+=1;
        }
    }
    return totalpoint;
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));