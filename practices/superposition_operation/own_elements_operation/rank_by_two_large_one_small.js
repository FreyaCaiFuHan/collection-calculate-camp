'use strict';

function rank_by_two_large_one_small(collection){
  let temp = 0;
  let temp1 = 0;
  let temp2 = 0;
  let temp3 = 0;
  let result = [];
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let countfinal = 0;
  let countfinal1 = 0;
  for (let j = 1; j < collection.length; j++) {
      for (let i = 1; i < collection.length; i++){
          if (collection[i-1] > collection[i]){
              temp = collection[i];
              collection[i] = collection[i-1];
              collection[i-1] = temp;
          }
          else{
              continue;
          }
      }
  }
  array1 = collection.slice(0,3);
  array2 = collection.slice(3,6);
  array3 = collection.slice(6,collection.length);


  temp1 = array1[0];
  array1[0] = array1[1];
  array1[1] = array1[2];
  array1[2] = temp1;

  temp2 = array2[0];
  array2[0] = array2[1];
  array2[1] = array2[2];
  array2[2] = temp2; 

  for (let j = 0; j < array2.length; j++) {
    countfinal = array1.length;
    array1[countfinal] = array2[j];
    countfinal++;
  }

  for (let j = 0; j < array3.length; j++) {
    countfinal1 = array1.length;
    array1[countfinal1] = array3[j];
    countfinal1++;
  }

  return array1;
}

module.exports = rank_by_two_large_one_small;
