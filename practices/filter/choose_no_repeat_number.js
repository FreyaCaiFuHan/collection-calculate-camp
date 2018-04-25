'use strict';

function choose_no_repeat_number(collection) {
  let result  = [];
  let count = 0;
  let sum = [];
  for (let i = 1; i<collection.length; i++){
    sum[0] = collection[0];
    if (collection[i]!=sum[count]){
      count++;
      sum[count] = collection[i];
    }
    else{
      continue;
    }
  }
  result = sum;
  return result;
}

module.exports = choose_no_repeat_number;
