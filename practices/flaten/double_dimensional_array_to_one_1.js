'use strict';

function double_to_one(collection) {
  let result = [1];
  let count = 1;
  for (let i = 0 ; i < collection.length ; i++){
    for (let j = 0 ; j < collection[i].length ; j++){
      result[count] = collection[i][j];
      count++;
    }
  }
  return result; 
}

module.exports = double_to_one;
