'use strict';
var rank_desc = function(collection){
    let result = new Array();
    
    for (let i = 0; i < collection.length - 1; i++) {
        let isSort = true;
        
        for (let j = 0; j < collection.length - i - 1; j++) {
            if (collection[j] > collection[j + 1]) {
                isSort = false;
                let temp = collection[j];
                collection[j] = collection[j + 1];
                collection[j + 1] = temp;
            }
        }
        if (isSort) {
            break;
        }
    }
    result = collection;
    
    return result;
};

module.exports = rank_desc;
