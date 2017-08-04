'use strict';
var map_to_three_multiples = function(collections){
    let result = new Array();
    
    for (let i in collections) {
        let n = collections[i] * 3;
        result.push(n);
    }
    
    return result;
};

module.exports = map_to_three_multiples;
