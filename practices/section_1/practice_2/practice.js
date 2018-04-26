function collect_same_elements(collection_a, collection_b) {
  let result = [];
  let a = 0;
  for (let j = 0; j < collection_a.length; j++){
    for (let i = 0; i < collection_b.length; i++){
      for (let k = 0; k < collection_b[i].length; k++){
        if (collection_a[j] == collection_b[i][k]){
          result[a] =  collection_b[i][k];
          a++;
        } 
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
