firstDuplicate = a => {
    var dupCheck = new Set();
    for (num of a){
       if (dupCheck.has(num)){
           return num;
       }else{
           dupCheck.add(num);
       }   
    } 
    return -1;
}