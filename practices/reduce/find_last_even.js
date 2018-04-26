'use strict';

function find_last_even(collection) {
  let result = 0;
  for (let i = 0; i< collection.length; i++){
    if(collection[i] % 2 == 0){
      result = collection[i];
    }
  }
  return result;
}

module.exports = find_last_even;
