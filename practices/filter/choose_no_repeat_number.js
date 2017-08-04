'use strict';

function choose_no_repeat_number(collection) {
    let result = new Array();
    
    for (let i in collection) {
        if (result.indexOf(collection[i]) === -1) {
            result.push(collection[i]);
        }
    }
    
    return result;
}

module.exports = choose_no_repeat_number;
