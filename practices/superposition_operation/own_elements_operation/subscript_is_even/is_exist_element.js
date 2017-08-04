'use strict';
var is_exist_element = function(collection,element){
    let result = false;
    let arr = [];
    arr = even(collection);
    
    if (arr.toString().indexOf(element.toString()) > -1) {
        result  = false;
    }else {
        result = true;
    }
    
    return result;
};

function even(collection) {
    let arr = [];
    
    for (let i in collection) {
        if (i % 2 !== 0) {
            arr.push(collection[i]);
        }
    }
    
    return arr;
}
module.exports = is_exist_element;
