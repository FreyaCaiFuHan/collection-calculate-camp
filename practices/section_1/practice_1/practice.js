function collect_same_elements(collection_a, collection_b) {
  let result = [];
  let a = 0;
  for (let j = 0; j < collection_a.length; j++){
    for (let i = 0; i < collection_b.length; i++){
      if (collection_a[j] == collection_b[i]){
        result[a] =  collection_b[i];
        a++;
      } 
    }
  }
  return result;
}

module.exports = collect_same_elements;
