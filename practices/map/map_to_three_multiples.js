'use strict';
var map_to_three_multiples = function(collections){
  let result = [];
  for (let i = 0; i<collections.length; i++){
    result[i] = 3*collections[i];
  }
  return result;
};

module.exports = map_to_three_multiples;
