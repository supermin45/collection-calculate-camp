'use strict';

function collect_min_number(collection) {
    let result = collection[0];
    let i = 1;
    
    for (let i in collection){
        if (collection[i] < result) {
            result = collection[i];
        }
    }
    
    return result;
}

module.exports = collect_min_number;

