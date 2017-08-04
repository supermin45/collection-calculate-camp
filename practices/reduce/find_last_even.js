'use strict';

function find_last_even(collection) {
    let result;
    
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            result = collection[i];
            continue;
        }
    }
    
    return result;
}

module.exports = find_last_even;
