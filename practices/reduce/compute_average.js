'use strict';

function compute_average(collection) {
  let result = 0;
  let sum = 0;
  for (let i = 0; i< collection.length; i++){
    sum = sum + collection[i];
    result = sum/collection.length;
  }
  return result;
}

module.exports = compute_average;

