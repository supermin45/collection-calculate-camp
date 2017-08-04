'use strict';
var calculate_average = function(collection){
    let result = 0;
    
    for (let i in collection) {
        if (i % 2 !== 0) {
            result += collection[i];
        }
    }
    let n = collection.length / 2;
    result /= n;
    
    return result;
};
module.exports = calculate_average;
