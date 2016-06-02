'use strict';

function double_to_one(collection) {
  var array = [];
  for(var i = 0; i < collection.length; i++){
    if(isArray(collection[i])){
      double_to_one(collection[i]);
    }
    else {
      array.push(collection[i]);
    }
  }
  return array;
}

module.exports = double_to_one;
