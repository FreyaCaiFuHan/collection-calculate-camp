'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  let count = 0;
  if (number_a < number_b) {
      for (let i = number_a; i<= number_b; i = i+1) {
        if (i<=26){
          result[count] = String.fromCharCode(i+96) ;  
          count++;
        }
        else {
          if (i == 52){
            result[count] = String.fromCharCode(97) + String.fromCharCode(122); 
            count++;
          }
          else{
            result[count] = String.fromCharCode(i/26+96) + String.fromCharCode(i%26+96); 
            count++;
          }
        }
      }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i = i-1) {
      if (i>26){
        if (i == 52){
          result[count] = String.fromCharCode(97) + String.fromCharCode(122); 
          count++;
        }
        else{
          result[count] = String.fromCharCode(i/26+96) + String.fromCharCode(i%26+96); 
          count++;
        }
      }
      else {
        result[count] = String.fromCharCode(i+96) ;  
        count++;
      }
    }
  }
  else {
    result[count] = String.fromCharCode(number_a / 26 + 96) + String.fromCharCode(number_a % 26 + 96);
  }
  return result;
}

module.exports = get_letter_interval_2;

