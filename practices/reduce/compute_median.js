'use strict';

function compute_median(collection) {
  let result = 0;
  
  sort(collection);
  
  if (collection.length % 2 !== 0){
      let n = parseInt(collection.length / 2);
      result =  collection[n];
  }else {
      let n1 = collection.length / 2;
      let n2 = collection.length / 2 - 1;
      result = (collection[n1] + collection[n2]) / 2;
  }
  
  return result;
}
function sort(collection) {
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
    
    return collection;
}
module.exports = compute_median;


