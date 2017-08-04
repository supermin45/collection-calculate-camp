'use strict';

function choose_common_elements(collection_a, collection_b) {
    let result = new Array();
    
    for (let i in collection_a) {
        if (collection_b.toString().indexOf(collection_a[i].toString()) > -1) {
            result.push(collection_a[i]);
        }
    }
    
    return result;
}

module.exports = choose_common_elements;
