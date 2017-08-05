'use strict';

function hybrid_operation(collection) {
    let result = 0;
    
    for (let i in collection) {
        collection[i] = collection[i] * 3 + 2;
    }
    
    for (let i in collection) {
        result += collection[i];
    }
    
    return result;
}

module.exports = hybrid_operation;

