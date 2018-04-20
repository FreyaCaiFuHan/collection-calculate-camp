'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  let a = 0;
  for (let j = 0; j < collection_a.length; j++){
    for (let i = 0; i < collection_b.length; i++){
      if (collection_a[i] == collection_b[j]){
        result[a] =  collection_a[i];
        a++;
      } 
    }
  }
  return result;
}

module.exports = get_intersection;
