'use strict';
var even_group_calculate_average = function(collection){
 	let result  = [];
    let arr = [];
    arr = even(collection);
    let b = [];
    let count = 0;
    for (let i  in arr) {
        if (arr[i] % 2 === 0) {
            b.push(arr[i]);
            count++;
        }
    }
    
   
   let count1 = 0;
    	let count2 = 0;

    	let c1 = [];
    	let c2 = [];
    	let c3 = [];
    if (count > 0) {
    	for (let i in b) {
    		if (Math.floor(b[i] / 100) >= 1){
    			c3.push(b[i]);
    		}else if (Math.floor(b[i] / 10) >=1) {
    			c2.push(b[i]);
    			count2++;
    		}else {
    			c1.push(b[i]);
    			count1++;
    		}
    	}
    }
    count1 = count1;
    count2 = count2;
    c1 = c1;
    c2 = c2;
    c3 = c3;

    if (count1 >0 && count2 >0) {
    	let avg1 = 0;
    for (let i in c1) {
    	avg1 += c1[i];
    }
    avg1 /= c1.length;
    result.push(avg1);

    let avg2 = 0;
    for (let i in c2) {
    	avg2 += c2[i];
    }
    avg2 /= c2.length;
    result.push(avg2);

    let avg3 = 0;
    for (let i in c3) {
    	avg3 += c3[i];
    }
    avg3 /= c3.length;
    result.push(avg3);
    }else if (count1 === 0 && count2 === 0){

    let avg3 = 0;
    for (let i in c3) {
    	avg3 += c3[i];
    }
    avg3 /= c3.length;
    result.push(avg3);
    }
    if (count === 0) {
        result = [0];
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
module.exports = even_group_calculate_average;
