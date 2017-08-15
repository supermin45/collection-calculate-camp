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



function get_integer_interval(number_a, number_b) {
     return (number_a <= number_b) ? increase(number_a, number_b) : decrease(number_a, number_b);
}

module.exports = get_integer_interval;


