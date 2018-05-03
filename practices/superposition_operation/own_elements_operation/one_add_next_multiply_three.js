'use strict';
function one_add_next_multiply_three(collection){
  let sum = [];
  let count = 0;
  for (let i = 1; i < collection.length; i++){
    sum[count] = (collection[i-1]+collection[i])*3;
    count++;
  } 
  return sum;
}
module.exports = one_add_next_multiply_three;
