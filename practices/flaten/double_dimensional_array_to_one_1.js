'use strict';
var array = [];
function double_to_one(collection) {
  for(var i = 0; i < collection.length; i++){
    if(typeof (collection[i]) === 'number'){
      array.push(collection[i]);
    }
    else {
      double_to_one(collection[i]);
    }
  }
  return array;
}

module.exports = double_to_one;
