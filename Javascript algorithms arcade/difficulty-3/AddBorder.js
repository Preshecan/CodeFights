function addBorder(picture) {

    let borderPic = picture.map(str => {
        let moveStr = [];
        moveStr += "*" + str + "*";               //add a star to start and end of each string
        return moveStr;
    });
    
    let strLen = picture[0].length;
    let stars = '*'.repeat(strLen+2);               //create string of stars the right length for the top and bottom of the array
    borderPic.push(stars);                          //add the bottom star string
    borderPic.unshift(stars);                       //add the top star string
    
    return borderPic;
}
