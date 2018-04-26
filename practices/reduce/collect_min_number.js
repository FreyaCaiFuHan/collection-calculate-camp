'use strict';

function collect_min_number(collection) {
  let result = [];
  let min = Infinity;
  for (let i = 0; i< collection.length; i++){
    if (collection[i]<min){
      min = collection[i];
    }
  }
  result = min;
  return result;
}

module.exports = collect_min_number;

