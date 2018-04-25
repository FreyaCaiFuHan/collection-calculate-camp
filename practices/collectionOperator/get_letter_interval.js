'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  let count = 0;
  if (number_a < number_b) {
      for (let i = number_a; i<= number_b; i = i+1) {
          result[count] = String.fromCharCode(i+96) ;  
          count++;
        }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i = i-1) {
        result[count] = String.fromCharCode(i+96) ;  
        count++;
    }
  }
  else {
    result[count] = String.fromCharCode(number_a+96) ;  
  }
  return result;
}

module.exports = get_letter_interval;
