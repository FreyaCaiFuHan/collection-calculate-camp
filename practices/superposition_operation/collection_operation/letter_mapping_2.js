'use strict';

function average_to_letter(collection) {
  let result = '';
  let sum = 0;
  let ave = 0;
  for (let i = 0; i < collection.length; i++){
    sum = sum + collection[i];
  }
  ave = Math.ceil(sum/collection.length);
  result = String.fromCharCode(ave+96) ;  
  return result;
}

module.exports = average_to_letter;

