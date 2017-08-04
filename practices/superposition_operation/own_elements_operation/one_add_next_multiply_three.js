'use strict';
function one_add_next_multiply_three(collection){
    
    let result = [];
    
    for (let i = 0; i < collection.length - 1; i++) {
    	for (let j = i + 1; j < collection.length; j++) {
    		let n = collection[i] + collection[j];
    		let n1 = n * 3;
    		result.push(n1);
    		break;
    	}
    	 
        
    }
    
    return result;
}
module.exports = one_add_next_multiply_three;
