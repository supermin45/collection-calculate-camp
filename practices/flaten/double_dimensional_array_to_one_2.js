'use strict';

function double_to_one(collection) {
    let result_1 = new Array();
    
    
    for (let i in collection) {
        for (let j in collection[i]) {
                result_1.push(collection[i][j]);
            }
    }
    return noRepeat(result_1);
    
}

function noRepeat(result_1) {
    let result = new Array();
    
    for (let i in result_1) {
        if (result.indexOf(result_1[i]) === -1) {
            result.push(result_1[i]);
        }
    }
    return result;
}

module.exports = double_to_one;
