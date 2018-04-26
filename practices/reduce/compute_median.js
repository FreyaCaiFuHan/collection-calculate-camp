'use strict';

function compute_median(collection) {
  let result = 0;
  let temp = [];
  var lowMiddle = 0;
  var highMiddle = 0;
  temp = collection.sort(function (a,b) {return a - b;})
  lowMiddle = Math.floor((temp.length - 1) / 2);
  highMiddle = Math.ceil((temp.length - 1) / 2);
  result = (Number(temp[lowMiddle]) + Number(temp[highMiddle])) / 2;
  return result;
}

module.exports = compute_median;


