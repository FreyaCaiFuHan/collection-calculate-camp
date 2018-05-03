'use strict';
var is_exist_element = function(collection,element){
    for (let i = 0; i < collection.length; i++){
        if (i % 2 == 0 && collection[i] == element ){
            return true;
        }
        if ( collection[i] != element ){
            if (i != collection.length-1){
                continue;
            }
            else {
                return false;
            }
        }
    }
}
module.exports = is_exist_element;
