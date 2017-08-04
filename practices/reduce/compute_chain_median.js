'use strict';

function compute_chain_median(chain) {
  let arr = new Array();
  arr = chain.split('->');
  for (let i in arr) {
      arr[i] = parseInt(arr[i]);
  }

   for (let i = 0; i < arr.length - 1; i++) {
        let isSort = true;
        
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                isSort = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (isSort) {
            break;
        }
    }
  
  let result = 0;
  if (arr.length % 2 !== 0){
      let n = parseInt(arr.length / 2) + 1;
      result =  arr[n];
  }else {
      let n1 = arr.length / 2;
      let n2 = arr.length / 2 - 1;
      result = (arr[n1] + arr[n2]) / 2;
  }
  
  return result;
}



module.exports = compute_chain_median;
