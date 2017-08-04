'use strict';
var number_map_to_word = function(collection){
    let result = new Array();
    
    for (let i in collection) {
        let n = collection[i] + 96;
        result.push(String.fromCharCode(n));
    }
    
    return result;
};

module.exports = number_map_to_word;
