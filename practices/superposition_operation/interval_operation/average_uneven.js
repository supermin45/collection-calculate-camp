'use strict';

function average_uneven(collection) {
    let result = 0;
    
    for (let i in collection) {
        if (collection[i] % 2 !== 0) {
            result += collection[i];
        }
    }
    let n = collection.length / 2;
    result /= n;
    
    return result;
}

module.exports = average_uneven;
