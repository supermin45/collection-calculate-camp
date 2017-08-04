'use strict';

function choose_even(collection) {
    let result = new Array();
    
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            result.push(collection[i]);
        }
    }
    
    return result;
}

module.exports = choose_even;
