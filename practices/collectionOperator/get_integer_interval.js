'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  let a = 0;
  if (number_a < number_b) {
      for (let i = number_a; i<= number_b; i++) {
        result[a] = i;  
        a++;
      }
  }
  else if (number_a > number_b) {
      for (let i = number_a; i>= number_b; i--) {
        result[a] = i;  
        a++;
      }
  }
  else {
    result[a] = number_a;
  }
  return result;
}

module.exports = get_integer_interval;

