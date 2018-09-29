function adjacentElementsProduct(inputArray) {
    var max = -1000;                        //makes sure max can be negative
    inputArray.reduce((acc, current) => {
        let product = acc * current;
        acc = current;                      //acc always == previous number in array
        if(product > max){
            max = product;
        }
        return acc;                         //return current value
    })
    return max;                             //return max product
}


//-92,-12-24,-96