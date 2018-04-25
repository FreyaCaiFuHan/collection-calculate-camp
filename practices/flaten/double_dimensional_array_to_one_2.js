'use strict';

function double_to_one(collection) {
  let result = [];
  let count = 0;
  let temp = [];
  for (let i = 0 ; i < collection.length ; i++){
    for (let j = 0 ; j < collection[i].length ; j++){
      temp[count] = collection[i][j];
      count++;
    }
  }
  result[0] = temp[0];
  for (let m = 1 ; m < temp.length ; m++){
    for (let n = 0 ; n < result.length ; n++){
      if (temp[m] != result[n] && n == result.length-1){
        result[n+1] = temp[m];
      }
      else if (temp[m] == result[n]){
        break;
      }
    }
    
  }
  return result; 
}

module.exports = double_to_one;
