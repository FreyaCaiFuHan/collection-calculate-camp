'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = [];
  let count = 0;
  let sum = 0;
  for (let i = 0; i < collection.length; i++){
    if (collection[i] % 2 != 0){
      result[count] = collection[i]*3+5;
      count++; 
    }
  }
  for (let i = 0; i < result.length; i++){
    sum = sum + result[i];
  }
  return sum;
}


module.exports = hybrid_operation_to_uneven;

