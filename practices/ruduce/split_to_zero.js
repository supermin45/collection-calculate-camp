'use strict';

function spilt_to_zero(number, interval) {
   let result = new Array;
    
   do{
        result.push(parseFloat(number));
        number = number - interval;
        number = number.toFixed(1);
    }while(number >= 0);
    
    if (result[result.length - 1] !== 0) {
        let b = result[result.length - 1] - interval;
        b = b.toFixed(1);
        result.push(parseFloat(b));
    }
     
     return result;
}
module.exports = spilt_to_zero;
