function sortByHeight(a) {
    let arr=[];
    for(let item of a){                     //remove all -1's
    if(item!=-1) arr.push(item);
    }

    arr.sort(function(a, b){return a - b}); //sort numbers into ascending order
    
    for(let i=0; i<a.length ; i++){         //splice -1's back into ordered array
        if(a[i] == -1){
           arr.splice(i,0,-1);
        }
    }
    return arr;
}
