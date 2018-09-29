function makeArrayConsecutive2(statues) {
    let sorted = statues.sort();
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let dup = Duplicates(statues);
    console.log(dup);
    noDups = [...dup];
    let range = max - min;             //get length of consecutive numbers in array
    let dif = range - (noDups.length-1);  //compare consecutive length to array                                                                                 //without duplicates
    return dif;
}

Duplicates = statues => {           //remove duplicates from array
  var dupCheck = new Set();
    for (num of statues){
       if (dupCheck.has(num)){
           console.log(num);
       }else{
           dupCheck.add(num);
       }   
    }
    return dupCheck;
}