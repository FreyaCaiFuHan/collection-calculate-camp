'use strict';

function get_union(collection_a, collection_b) {
  let result = [];
  let count = 0;
  for (let i = 0; i < collection_b.length; i++){
    for (let j = 0; j < collection_a.length; j++){
      if (collection_a[j] != collection_b[i] && j != collection_a.length-1) {
        count++;
        continue;
      }
      if (collection_a[j] != collection_b[i] && j == collection_a.length-1){
        count++;
        collection_a[count] = collection_b[i];
        count = 0;
      }
      if (collection_a[j] == collection_b[i]) {
        count = 0;
        break;
      }
    }
  }
  result = collection_a;
  return result;
}

module.exports = get_union;

