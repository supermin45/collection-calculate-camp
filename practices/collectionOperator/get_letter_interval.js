'use strict';
function increase(number_a, number_b) {
    var result = [];
    
    for (var i = number_a; i <= number_b; i++) {
       
        
        result.push(String.fromCharCode(i + 96));
    }
    
    return result;
}
function decrease(number_a, number_b) {
    var result =[];
    
    for (var i = number_a; i >= number_b; i--) {
        
        result.push(String.fromCharCode(i + 96));
    }
    
    return result;
}


function get_letter_interval(number_a, number_b) {
   return (number_a <= number_b) ?  increase(number_a, number_b) : decrease(number_a, number_b)
}

module.exports = get_letter_interval;
