'use strict';


function grouping_count(collection) {
    let count = 1;
    
    let yuansu = new Array();
    let sum = new Array();
    
    for (let i = 0; i < collection.length; i++) {
         for (let j = i + 1; j < collection.length; j++){
              if (collection[i] === collection[j]) {
                  count++;
                  collection.splice(j,1);
                  j--;
              }
        }
        yuansu[i] = collection[i]; 
        sum[i] = count;
        count = 1;
    }
    let result = new Object();
    for (let i in yuansu) {
        result.yuansu[i] = sum[i];
    }
    
    return result;
}

module.exports = grouping_count;
