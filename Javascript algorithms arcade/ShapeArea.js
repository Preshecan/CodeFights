let shapeArea = (n) => {        //recursion

    if(n === 1){
       return 1;
       }
    return shapeArea(n-1) + 4*(n-1);
};


//1,5,13,25
//4,8,12    = 4*(n-1)