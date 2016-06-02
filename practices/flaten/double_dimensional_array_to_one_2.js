'use strict';

function double_to_one(collection) {
  var array = [];
  for(var i = 0; i < collection.length; i++){
    if(isArray(collection[i])){
      double_to_one(collection[i]);
    }
    else {
      if(isExist(collection[i], array)){
        continue;
      }
      array.push(collection[i]);
    }
  }
  return array;
}

function isExist(element, array) {
  var arrLength = array.length;
  for(var i = 0; i < arrLength; i++){
    if (element === array[i]){
      return true;
    }
  }
}

module.exports = double_to_one;
