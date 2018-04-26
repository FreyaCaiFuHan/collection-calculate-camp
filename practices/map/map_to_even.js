'use strict';
function map_to_even(collection){
  let result = [];
  for (let i = 0; i<collection.length; i++){
    result[i] = 2*collection[i];
  }
  return result;
}
module.exports = map_to_even;
