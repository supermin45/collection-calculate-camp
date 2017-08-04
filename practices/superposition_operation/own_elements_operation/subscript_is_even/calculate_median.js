'use strict';
var calculate_median = function(collection){
    let result = 0;
    let arr = [];
    
    arr = even(collection);
    if (arr.length % 2 !== 0) {
        let n = Math.ceil(arr.length / 2) - 1;
        result = arr[n];
    }else {
        let n1  = arr.length / 2 - 1;
        let n2 = arr.length / 2;
        result = (arr[n1] + arr[n2]) / 2;
    }
    
    return result;
};

function even(collection) {
    let arr = [];
    
    for (let i in collection) {
        if (i % 2 !== 0) {
            arr.push(collection[i]);
        }
    }
    
    return arr;
}
module.exports = calculate_median;
