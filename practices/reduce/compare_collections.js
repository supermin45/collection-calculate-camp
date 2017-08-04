'use strict';

function compare_collections(collection_a, collection_b) {
    let result;
    
    if (collection_a.length === collection_b.length) {
        
        for (let i in collection_a) {
            if (collection_a[i] === collection_b[i]) {
                result = true;
            }else {
                result = false;
            }
        }
    }else {
        result = false;
    }
    
    return result;
}

module.exports = compare_collections;


