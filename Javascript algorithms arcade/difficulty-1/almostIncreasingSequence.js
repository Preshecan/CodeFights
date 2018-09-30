function almostIncreasingSequence(sequence) {
    let j = 1;
    let deletes = 0;
    for(var i=0; i<sequence.length ; i++){          //loop through every number
        if(sequence[j] <= sequence[i]){                //check if next number is less or equal to 'i'
            console.log(sequence);               
            j++;                                    //if so, compare the same 'i' value to the next number along
            if(sequence[j] <= sequence[i]){         //if next number is also lower 'i' must be removed
                sequence.splice(i,1);
                deletes++;
            }else{                                  //if j+1 is greater than i, just remove original j
                sequence.splice(j-1,1);
                deletes++;
            }
            i--;                                    //accounting for deleted element
            j=j-2;
        }   
    j++; 
        
        if(sequence[j-1] <= sequence[i]){   //if after deletion of the right element the previous element is equal
            console.log('double down');     //remove 'i', P.S.'i' is yet to be incremented so it's not i-1
            console.log(sequence);
            sequence.splice(j-1,1);
            deletes++;
        }
    } 
    return deletes <= 1;
}