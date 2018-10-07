function areSimilar(a, b) {
    
    let swaps = 0;
    let anum = [];
    let bnum = [];
    
    for(let i=0; i<a.length ; i++){
        //console.log(a[i], b[i]);
        if(a[i] != b[i]){
            swaps++;                 //if swaps==2, one swap is needed, any greater means false 
            anum.push(a[i]);         //put the numbers required for a swap into an array to check if a swap will fix it
            bnum.push(b[i]);
        }
    }
    
    //console.log(anum, bnum);    
    if(swaps>2){
        return false;
    }
    
    anum = anum.sort();   //sort/swap numbers around, if the one swap needed works the sorted arrays should be the same
    bnum = bnum.sort();
    if(JSON.stringify(anum)!=JSON.stringify(bnum)){
        return false;
    }
    return true;
}