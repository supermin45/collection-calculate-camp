'use strict';

function average_to_letter(collection) {
    let result;
    
    let n = avg(collection) + 96;
    result = String.fromCharCode(n);
    
    return result;
}

function avg(collection) {
    let avg  = 0;
    
    for (let i in collection) {
        avg += collection[i];
    }
    avg = Math.ceil(avg / collection.length);
    
    return avg
}
module.exports = average_to_letter;

