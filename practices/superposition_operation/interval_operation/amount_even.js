'use strict';

function amount_even(collection) {
    let result = 0;
    
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            result += collection[i];
        }
    }
    
    return result;
}
module.exports = amount_even;
