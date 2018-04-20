'use strict';

function collect_last_element(collection) {
  let result = 0;
  for (let i = 0; i < collection.length; i++){
    if (i == collection.length - 1) result = collection[i];
  }
  return result;
}

module.exports = collect_last_element;
