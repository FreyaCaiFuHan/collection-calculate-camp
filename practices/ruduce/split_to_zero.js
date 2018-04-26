'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  let i = 0;
  let interval10 = 10*interval
  result[0] = number*10;
  while (result[i] > 0){
    result[i+1] = result[i]-interval10;
    i++;
  }
  for (let i = 0; i< result.length; i++){
    result[i] = result[i]/10;
  }
  return result;
}
module.exports = spilt_to_zero;
