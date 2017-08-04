'use strict';

function double_to_one(collection) {
    let result = new Array();
    
    for (let i in collection) {
        for (let j in collection[i]) {
                result.push(collection[i][j]);
            }
    }
    result.unshift(collection[0]);
       
    return result;

}

module.exports = double_to_one;
