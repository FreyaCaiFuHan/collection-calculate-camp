'use strict';

function compare_collections(collection_a, collection_b) {
  let result = [];
  for (let j = 0; j < collection_a.length; j++){
    if(collection_a[j] == collection_b[j]){
      result = true;
    }
  }
  return result;
}
module.exports = compare_collections;


