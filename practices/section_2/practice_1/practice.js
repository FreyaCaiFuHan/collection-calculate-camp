function count_same_elements(collection) {
  let result = [];
  let savekind = [];
  let savenum = [];
  let count = 0;
  let key = '';
  savekind[0] = collection[0];
  savenum[0] = 1;
  for (let i = 1; i < collection.length; i++){
    for (let j = 0; j < savekind.length; j++){
      if (collection[i] == savekind[j]){
        savenum[j]++;
      }
      else if(collection[i] != savekind[j] && j == savekind.length-1){
        savenum[savekind.length] = 1;
        savekind[savekind.length] = collection[i]
        break;
      }
    }
  }
  for (let k = 0; k < savekind.length; k++){
    result[k] = {key: savekind[k], count: savenum[k]};
  }
  return result;
}

module.exports = count_same_elements;
