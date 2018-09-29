function checkPalindrome(inputString) {
    var splitString = inputString.split('');
    var reversedString = splitString.reverse();
    reversedString = reversedString.join('');
    console.log(reversedString);
    if(inputString === reversedString){
        return true;
    }else{
        return false;
    }
}