'use strict';

function hybrid_operation_to_uneven(collection) {
    let result = 0;
    let arr1 = make(collection);
    
    for (let i in arr1) {
        result += arr1[i];
    }
    
    return result;
}

function make(collection) {
    let arr = [];
    
    for (let i in collection) {
        if (collection[i] % 2 !== 0) {
            collection[i] = collection[i] * 3 + 5;
            arr.push(collection[i]);
        }
    }
    
    return arr;
}
module.exports = hybrid_operation_to_uneven;

