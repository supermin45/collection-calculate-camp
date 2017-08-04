'use strict';

function even_to_letter(collection) {
    let result = [];
    let arr = [];
    
    arr = even(collection);
    
    for (let i in arr) {
        let n = arr[i] + 96;
        result.push(String.fromCharCode(n));
    }
    
    return result;
}
function even(collection) {
    let arr = [];
    
    for (let i in collection) {
    	if (collection[i] % 2 === 0){
            arr.push(collection[i]);
    	}
    }
    
    return arr;
}
module.exports = even_to_letter;
