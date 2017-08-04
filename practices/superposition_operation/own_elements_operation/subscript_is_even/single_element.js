'use strict';
var single_element = function(collection){
   let result = new Array();
   let arr = [];
   let count = 1;
   let yuansu = [];
   let sum = [];
   
    
   arr = even(collection);
   for (var i=0; i<arr.length; i++) {
            	for (var j=i+1; j<arr.length; j++) {
            		if (arr[i] === arr[j]) {
            			count++;
                        arr.splice(j,1);
                        j--;
            		}
            	}
            	yuansu[i] = arr[i];//把当期元素存入结果
            	sum[i] = count;
            	count= 1;
            }

   let b = [];
   for (let i in yuansu) {
   	b[i] = {key:' ', num:0};
   	b[i].key = yuansu[i];
   	b[i].num = sum[i];
   }
   
   for (let i in b) {
   	if (b[i].num <= 1) {
   		result.push(b[i].key);
   	}
   }
 
 return result;
};

function even(collection) {
    let arr = [];
    
    for (let i in collection) {
    	if (i % 2 !== 0){
            arr.push(collection[i]);
    	}
    }
    
    return arr;
}
module.exports = single_element;
