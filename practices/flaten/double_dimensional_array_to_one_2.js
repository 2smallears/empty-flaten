'use strict';
var array = [];
function double_to_one(collection) {
  for(var i = 0; i < collection.length; i++){
    if(typeof (collection[i]) === 'number'){
      if(!isExist(collection[i], array)){
        array.push(collection[i]);
      }
    }else {
      double_to_one(collection[i]);
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
