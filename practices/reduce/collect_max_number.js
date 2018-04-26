'use strict';

function collect_max_number(collection) {
  let result = [];
  let max = 0;
  for (let i = 0; i< collection.length; i++){
    if (collection[i]>max){
      max = collection[i];
    }
  }
  result = max;
  return result;
}

module.exports = collect_max_number;
