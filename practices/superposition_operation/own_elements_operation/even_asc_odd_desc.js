'use strict';
var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
var even_asc_odd_desc = function(collection){
    let even = [];
    let counteven = 0;
    let odd = [];
    let countodd = 0;
    let result = [];
    let count = 0;
    for (let i = 0; i < collection.length; i++){
        if (collection[i] % 2 != 0){
            even[counteven] = collection[i];
            counteven++;
        }
        else{
            odd[countodd] = collection[i];
            countodd++;
        }
    } 


    let temp = 0;
    for (let j = 1; j < even.length; j++) {
        for (let i = 1; i < even.length; i++){
            if (even[i-1] < even[i]){
                temp = even[i];
                even[i] = even[i-1];
                even[i-1] = temp;
            }
            else{
                continue;
            }
        }
    }
    let temp1 = 0;
    for (let j = 1; j < odd.length; j++) {
        for (let i = 1; i < odd.length; i++){
            if (odd[i-1] > odd[i]){
                temp1 = odd[i];
                odd[i] = odd[i-1];
                odd[i-1] = temp1;
            }
            else{
                continue;
            }
        }
    }
    for (let j = 0; j < even.length; j++){
        count = odd.length;
         odd[odd.length] = even[j];
         count++;
    }
    
    return odd;
}

module.exports = even_asc_odd_desc;
