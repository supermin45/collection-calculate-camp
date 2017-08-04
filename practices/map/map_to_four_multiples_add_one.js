'use strict';
var map_to_four_multiples_add_one = function(collection){
    let result = new Array();
    
    for (let i in collection) {
        let n = collection[i] * 4 + 1;
        result.push(n);
    }
    
    return result;
};

module.exports = map_to_four_multiples_add_one;
