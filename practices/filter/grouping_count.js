'use strict';

function grouping_count(collection) {
  let result  = { };
  let savekind = [];
  let savenum = [];
  let count = 0;
  savekind[count] = collection[0];
  savenum[count] = 1;
  for (let i = 1; i < collection.length; i++){
    for (let j = 0; j < savekind.length; j++){
      if (collection[i] == savekind[j]){
        savenum[j] = savenum[j] + 1;
        break;
      }
      else if(j == savekind.length-1){
        savekind[j+1] = collection[i];
        savenum[j+1] = 0;
      }
      else {
        continue;
      }
    }
  }
  for (let m = 0; m < savekind.length; m++){
    result[savekind[m]] = savenum[m]; 
  }
  return result;
}

module.exports = grouping_count;
