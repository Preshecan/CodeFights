function firstNotRepeatingCharacter(s) {
    var splitString = s.split('');
    var duplic = new Set();
    var single = new Set();
    for(letter of splitString){           //iterate over each letter in string
        if(single.has(letter)){           //if a letter is found for a second time add it to the 'duplic' set and remove it from the 'single' set
            duplic.add(letter);            
            single.delete(letter);          
        }else{
            single.add(letter);            
        }
    }
    
    for(letter of single){                //if there's an odd number of duplications of a single letter the top loop fails so compare the 
        if(duplic.has(letter)){           //'duplic' and 'single' sets for a final check to delete and duplicates from the 'single' set
            single.delete(letter);
        }
    }
    
    singleArray = [...single];
    
    console.log(single);
    if(singleArray.length != 0){
        return singleArray[0]; 
    }else{
        return "_";
    }
    
}