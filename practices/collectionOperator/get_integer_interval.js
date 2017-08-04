'use strict';
function increase(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i <= number_b; i++) {
        result.push(i);
    }
    
    return result;
}
function decrease(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i >= number_b; i--) {
        result.push(i);
    }
    
    return result;
}
function self(number_a, number_b) {
    var result = new Array();
    result.push(number_a);
    return result;
}


function get_integer_interval(number_a, number_b) {
 
    if (number_a < number_b) {
        return increase(number_a, number_b);
    }else if (number_a > number_b) {
        return decrease(number_a, number_b);
    }else {
        return self(number_a, number_b);
    }
    
  
    
}

module.exports = get_integer_interval;


