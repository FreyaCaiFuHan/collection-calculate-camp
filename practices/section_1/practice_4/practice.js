function collect_same_elements(collection_a, object_b) {
  let result = [];
  let a = 0;
  for (let j = 0; j < collection_a.length; j++){
    for (let i = 0; i < object_b.value.length; i++){
        if (collection_a[j].key == object_b.value[i]){
          result[a] =  object_b.value[i];
          a++;
        } 
    }
  }
  return result;
}

module.exports = collect_same_elements;
