'use strict';
var calculate_median = function(collection){
    let result = 0;
    let temp = [];
    var lowMiddle = 0;
    var highMiddle = 0;
    let letter = '';
    temp = collection.sort(function (a,b) {return a - b;})
    lowMiddle = Math.floor((temp.length - 1) / 2);
    highMiddle = Math.ceil((temp.length - 1) / 2);
    result = Math.ceil((Number(temp[lowMiddle]) + Number(temp[highMiddle])) / 2);
    return result;
};
module.exports = calculate_median;
