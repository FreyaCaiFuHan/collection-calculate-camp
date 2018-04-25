'use strict';

function choose_multiples_of_three(collection) {
  let result  = [];
  let count = 0;
  for (let i = 0; i<collection.length; i++){
    if (collection[i]%3==0){
      result[count] = collection[i];
      count++;
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
