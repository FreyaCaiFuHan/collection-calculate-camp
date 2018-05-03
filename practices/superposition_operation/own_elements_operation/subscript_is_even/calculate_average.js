'use strict';
var calculate_average = function(collection){
    let result = 0;
    for (let i = 0; i < collection.length; i++){
        result = result + collection[i];
    }
    result = Math.ceil(result/collection.length);
    return result;
};
module.exports = calculate_average;
