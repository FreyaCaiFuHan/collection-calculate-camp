'use strict';
var number_map_to_word = function(collection){
  let result = [];
  let count = 0;
    for (let i = 0; i< collection.length; i = i+1) {
      if (collection[i]<=26){
        result[count] = String.fromCharCode(collection[i]+96) ;  
        count++;
      }
      else {
          result[count] = String.fromCharCode(collection[i]/26+96) + String.fromCharCode(collection[i]%26+96); 
          count++;
      }
    }
  return result;
};

module.exports = number_map_to_word;
