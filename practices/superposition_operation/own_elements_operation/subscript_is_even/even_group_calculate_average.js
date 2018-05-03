'use strict';

var even_group_calculate_average = function(collection){
    let temp = [];
    let one = [];
    let two = [];
    let three = [];
    let count = 0;
    let cou1 = 0;
    let cou2 = 0;
    let cou3 = 0;
    let ave1 = 0;
    let ave2 = 0;
    let ave3 = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let result = [];
    for (let i = 0; i < collection.length; i++){
        if (i % 2 != 0 && collection[i] % 2 == 0){
            temp[count] = collection[i];
            count++;
        }
    }
    if( temp == 0 ){
        return [0];
    }
    
    for (let j = 0; j < temp.length; j++){
        
        if (temp[j] % 10 == temp[j]){
            one[cou1] = temp[j];
            cou1++;
        }
        else if (temp[j] % 100 == temp[j] ){
            two[cou2] = temp[j];
            cou2++;
        }
        else {
            three[cou3] = temp[j];
            cou3++;
        }
    }
    if( one == 0 ){
        for (let i = 0; i < three.length; i++){
            sum3 = sum3 + three[i];
            ave3 = sum3 / three.length;
        }
        result[0] = ave3;
        return result;
    }

    for (let i = 0; i < one.length; i++){
        sum1 = sum1 + one[i];
        ave1 = sum1 / one.length;
    }
    
    for (let i = 0; i < two.length; i++){
        sum2 = sum2 + two[i];
        ave2 = sum2 / two.length;
    }
    
    for (let i = 0; i < three.length; i++){
        sum3 = sum3 + three[i];
        ave3 = sum3 / three.length;
    }
    
    result[0] = ave1;
    result[1] = ave2;
    result[2] = ave3;

    
    return result;
    
}

module.exports = even_group_calculate_average;
