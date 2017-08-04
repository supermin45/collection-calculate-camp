'use strict';
function map_to_even(collection){
    let result = new Array();
    
    for (let i in collection) {
        let n = collection[i] * 2;
        result.push(n);
    }
    
    return result;
}
module.exports = map_to_even;
