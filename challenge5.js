function getCount(str){
    let vowel = 0;
    const arr = str.split("")
    for (let i = 0;i < arr.length;i++){
        switch(arr[i]){
            case 'a':
                vowel++;
                break;
            case 'e':
                vowel++;
                break;
            case 'i':
                vowel++;
                break;
            case 'o':
                vowel++;
                break;
            case 'u':
                vowel++;
                break;

            
        }
    }
    return vowel
}

console.log(getCount("shakir"));