function isLucky(n) {
    let num = n.toString(); 
    let numLength = num.length;
    let firstHalf = 0;
    let secondHalf = 0;
    
    for(let i=0; i<numLength ; i++){
        i<(numLength/2) ? firstHalf += parseInt(num[i]) : secondHalf += parseInt(num[i]);
    }
    
    return firstHalf === secondHalf;
}