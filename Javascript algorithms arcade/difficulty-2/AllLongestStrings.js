function allLongestStrings(inputArray) {

    let maxLength = 0;
    
    inputArray.forEach(function(element) {
        if(element.length >= maxLength){
           maxLength = element.length;
        }
         
    });
    const result = inputArray.filter(word => word.length >= maxLength);
    
    return result;
}
