function matrixElementsSum(matrix) {

let cols = matrix[0].length;
let rows = matrix.length;
let price = 0;
    
    for(let i = 0; i<cols; i++){
        let haunted = false;
        for(let j = 0; j<rows; j++){
            if(matrix[j][i] === 0){
                haunted = true;
            }
            if(!haunted){
               price += matrix[j][i];
            }
        }
    }
    
    return price;
}
