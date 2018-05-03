'use strict';

var single_element = function(collection){
    let temp = [];
    let temp1 = [];
    let count = 0;
    let count1 = 0;

    for (let i = 0; i < collection.length; i++){
        if (i % 2 != 0){
            temp[count] = collection[i];
            count++;
        }
    }
    
    for (let i = 1; i < temp.length; i++){
        if (temp[i] == temp[i-1] && temp[i+1] == temp[i]){
            return [];
        }
        else break;
    }

    temp1[0] = temp[0];
    for (let i = 1; i < temp.length; i++){
        for (let j = 0; j < temp1.length; j++){
            if (temp1[j] == temp[i]){
                break;
            }
            else {
                temp1[count1] = temp[i];
                count1++;
                break;
            }
        }
    }
   
    return temp1;
}

module.exports = single_element;
