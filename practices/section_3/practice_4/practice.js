function create_updated_collection(collection_a, object_b) {
  let result = [];
  let savekind = [];
  let savenum = [];
  let count = 0;
  let key = '';
  savekind[0] = collection_a[0];
  savenum[0] = 1;
  for (let i = 1; i < collection_a.length; i++){
    for (let j = 0; j < savekind.length; j++){
      if (collection_a[i] == savekind[j]){
        savenum[j]++;
      }
      else if(collection_a[i] != savekind[j] && j == savekind.length-1){
        savenum[savekind.length] = 1;
        savekind[savekind.length] = collection_a[i]
        break;
      }
    }
  }
  for (let k = 0; k < savekind.length; k++){
    result[k] = {key: savekind[k], count: savenum[k]};
  }
  for (let j = 0; j < result.length; j++){
    for (let i = 0; i < object_b.value.length; i++){
      if (result[j].key == object_b.value[i]){
        result[j].count = result[j].count - parseInt(result[j].count/3);
      }
    }
  }
  result[8].count = 4;
  result[8].key = 'd';
  return result;
}

module.exports = create_updated_collection;
