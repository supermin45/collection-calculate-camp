'use strict';
var number_map_to_word_over_26 = function(collection){
    let result = new Array();
    
    for (let i in collection) {
        let n = collection[i] + 96;
        
        if (n <= 122) {
            result.push(String.fromCharCode(n));
        }else {
            let n1 = n - 122;
            let n2 = n1 + 96;
            result.push('a' + String.fromCharCode(n2));
        }
    }
    
    return result;
};

module.exports = number_map_to_word_over_26;
