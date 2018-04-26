'use strict';
var rank_desc = function(collection){
  let result = [];
  let temp = 0;
  for (let j = 0; j<collection.length;j++){
    for(let i = 1; i<collection.length;i++){
      if (collection[i-1]>collection[i]){
        temp = collection[i];
        collection[i] = collection[i-1];
        collection[i-1] = temp;
      }
    }
  }
  result = collection
  return result;
};

module.exports = rank_desc;
