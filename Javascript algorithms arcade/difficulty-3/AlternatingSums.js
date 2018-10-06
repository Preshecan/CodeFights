function alternatingSums(a) {
let team1sum = 0;
let team2sum = 0;
    
    
    for(let i = 0 ; i<a.length ; i++){
        if(i % 2 === 0){
            team1sum += a[i];
        }else{
            team2sum += a[i];
        }
    }
    return [team1sum, team2sum];
         
}
