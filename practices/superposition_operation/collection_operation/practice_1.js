'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  for (let i = 0; i < collection.length; i++){
    collection[i] = collection[i]*3+2;
    sum = sum + collection[i];

  }
  return sum;
}

module.exports = hybrid_operation;

