'use strict';

function compute_average(collection) {
    let result = 0;
    
    for (let i in collection) {
        result += collection[i];
    }
    result /= collection.length;
    
    return result;
}

module.exports = compute_average;

