function commonCharacterCount(s1, s2) {

    let one = s1.split('');
    let two = s2.split('');
    var set1 = new Set(one);
    var set2 = new Set(two);
    let count = 0;
    
    
    one.forEach (function(letter){
         if (set2.has(letter)){
            let index = two.indexOf(letter);
            two.splice(index,1);                //remove matching letter from second set
            set2 = new Set(two);
             console.log(set2);
            count++;
        }
    })
    
    return count;
       
    
}