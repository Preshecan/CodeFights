function arrayChange(inputArray) {
    let increments = 0;
    
    inputArray.reduce((acc, val) => {
        if(val < acc){
            let incrementBy = (acc+1)-val;
            val = val + incrementBy;
            increments += incrementBy;
        }
        if(val == acc){
            val = val +1;
            increments += 1;
        }
        acc = val;
        //console.log(acc); this gives the incremented array
        return acc;
    });
    return increments;
}