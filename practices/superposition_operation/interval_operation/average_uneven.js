'use strict';

function average_uneven(collection) {
  let sum = 0;
  let count = 0;
  let ave = 0;
  for (let i = 0;i < collection.length; i++){
    if (collection[i] % 2 != 0){
      count++;
      sum = sum + collection[i];
      ave = sum/count
    }
  }
  return ave;
}

module.exports = average_uneven;
