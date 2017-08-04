'use strict';

function calculate_elements_sum(collection) {
    let result = 0;
    
    for (let i in collection) {
        result += collection[i];
    }
    
    return result;
}

module.exports = calculate_elements_sum;

