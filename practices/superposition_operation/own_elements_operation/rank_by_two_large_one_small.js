'use strict';
function rank_by_two_large_one_small(collection){
    let arr = [];
    arr = sort(collection);
    
    let b1 = new Array();
    let b2 = new Array();
    let b3 = new Array();
    
    for (let i in arr) {
        if (i <= 2) {
            b1.push(arr[i]);
        }else if (i > 2 && i <= 5) {
            b2.push(arr[i]);
        }else {
            b3.push(arr[i]);
        }      
    }
    let a = b1[0];
    let b = b2[0];
    b1.splice(0,1);
    b2.splice(0,1);
    b1.push(a);
    b2.push(b);

    let result = [];
    
    
    for (let i in b1){
        result.push(b1[i]);
    }
    for (let i in b2){
        result.push(b2[i]);
    }
    for (let i in b3){
        result.push(b3[i]);
    }
    return result;
    	
    
}
function sort(collection){
     let arr = [];
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
    arr = collection;
    
    return arr;
}
module.exports = rank_by_two_large_one_small;
