'use strict';

function find_first_even(collection) {
    let result;
    
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            result = collection[i];
            break;
        }
    }
    
    return result;
}

module.exports = find_first_even;

