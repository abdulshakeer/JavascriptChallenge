var humanyears = function(years){
    let catage;
    let dogage;
    if(years == 1){
        return [years,15,15];
    }
    if(years == 2){
        return [years,24,24];
    }
    const excessyear = years - 2;
    const extracatyear = excessyear * 4;
    const extradogyear = excessyear * 5;
    return [years,24+extracatyear,24+extradogyear]
}

console.log(humanyears(1));
console.log(humanyears(2));
console.log(humanyears(15));