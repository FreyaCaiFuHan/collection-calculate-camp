'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  let a = 0;
  if (number_a < number_b) {
      for (let i = number_a+1; i<= number_b; i = i+2) {
        result[a] = i;  
        a++;
      }
  }
  else if (number_a > number_b) {
      for (let i = number_a; i>= number_b+1; i = i-2) {
        result[a] = i;  
        a++;
      }
  }
  else {
    if (number_a % 2 == 0) result[a] = number_a;
    else result = [];
  }
  return result;
}

module.exports = get_integer_interval_2;
