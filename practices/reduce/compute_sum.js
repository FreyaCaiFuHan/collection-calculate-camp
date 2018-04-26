'use strict';

function calculate_elements_sum(collection) {
  let result = 0;
  let sum = 0;
  for (let i = 0; i< collection.length; i++){
    sum = sum + collection[i];
    result = sum;
  }
  return result;
}

module.exports = calculate_elements_sum;

