'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  let count = 0;
  let a = 0;
  let tem = [];
  let cou = 0;

  for (let m = 0; m < collection_a.length; m++){
    for (let n = 0; n < collection_b.length; n++){
      if (collection_a[m] == collection_b[n]){
        tem[a] =  collection_b[n];
        a++;
      } 
    }
  }

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

  for (let p = 0; p < collection_a.length; p++){
    for (let q = 0; q < tem.length; q++){
      if (collection_a[p] != tem[q] && q == tem.length-1){
        result[cou] = collection_a[p];
        cou++;
      }
      else if (collection_a[p] == tem[q]){
        break;
      }
    }
  }
  return result;
}
module.exports = choose_no_common_elements;
