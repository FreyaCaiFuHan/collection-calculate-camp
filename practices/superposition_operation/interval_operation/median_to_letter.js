'use strict';

function median_to_letter(collection) {
  let result = 0;
  let temp = [];
  var lowMiddle = 0;
  var highMiddle = 0;
  let letter = '';
  temp = collection.sort(function (a,b) {return a - b;})
  lowMiddle = Math.floor((temp.length - 1) / 2);
  highMiddle = Math.ceil((temp.length - 1) / 2);
  result = Math.ceil((Number(temp[lowMiddle]) + Number(temp[highMiddle])) / 2);
  if (result<=26){
    letter = String.fromCharCode(result+96) ;  
  }
  else {
    if (result == 52){
      letter = String.fromCharCode(97) + String.fromCharCode(122); 
    }
    else{
      letter = String.fromCharCode(result/26+96) + String.fromCharCode(result%26+96);
    }
  }
  return letter;
}

module.exports = median_to_letter;
