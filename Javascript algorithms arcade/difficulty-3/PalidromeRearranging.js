function palindromeRearranging(inputString) {
    
    let odds = 0;
    
    let charCounts = inputString.split("").reduce(      //create object showing each letter with number of occurrences
    (acc, el) => {
      if(acc.hasOwnProperty(el))
        acc[el]++;
      else
        acc[el] = 1;
      return acc;
    }, {});
    
    Object.entries(charCounts).forEach(([key, val]) => {
        if((val % 2) != 0){     //if number of letters with odd occurrences is greater than 1 a palindrome can't be made
           odds++;
        }         
    });
    
    if(odds>1){
        return false;
    }else{
        return true;
    }
    
}

//if one letter, true
//if even number of letters, needs to be even numbers of each letter
//if odd number of letters, needs to be even numbers of each letter but can accept one odd occurring letter