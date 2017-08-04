'use strict';
var even_asc_odd_desc = function(collection){
    
    let arr1 = [];
    let arr2 = [];
    
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            arr1.push(collection[i]);
        }else {
            arr2.push(collection[i]);
        }
    }
    
    
    for (let i = 0; i < arr1.length - 1; i++) {
        let isSort = true;
        
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                isSort = false;
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
        if (isSort) {
            break;
        }
    }
    
    
    for (let i = 0; i < arr2.length - 1; i++) {
        let isSort = true;
        
        for (let j = 0; j < arr2.length - i - 1; j++) {
            if (arr2[j] < arr2[j + 1]) {
                isSort = false;
                let temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
        if (isSort) {
            break;
        }
    }
    
    
    let result = [];
    result = arr1.concat(arr2);
    
    return result;
};
module.exports = even_asc_odd_desc;
