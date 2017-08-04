 'use strict';

function median_to_letter(collection) {
    let result = 0;
    
    let n1 = collection.length / 2 - 1;
    let n2 = collection.length / 2;
    let n3 = collection[n1] + collection[n2];
    let n4 = Math.ceil(n3 / 2);
    let b = n4 + 96 - 122 + 96;
    result = 'a' + String.fromCharCode(b);
    
    return result;
}

module.exports = median_to_letter;
