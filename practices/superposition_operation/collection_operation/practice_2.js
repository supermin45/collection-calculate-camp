'use strict';

function hybrid_operation_to_uneven(collection) {
    let result = [];
    
    for (let i in collection) {
        if (collection[i] % 2 !== 0) {
            collection[i] = collection[i] * 3 + 2;
            result.push(collection[i]);
        }
    }
    
    return result;
}

module.exports = hybrid_operation_to_uneven;

