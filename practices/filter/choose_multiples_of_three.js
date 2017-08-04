'use strict';

function choose_multiples_of_three(collection) {

  let result = new Array();
    
    for (let i in collection) {
        if (collection[i] % 3 === 0) {
            result.push(collection[i]);
        }
    }
    
    return result;
}

module.exports = choose_multiples_of_three;
