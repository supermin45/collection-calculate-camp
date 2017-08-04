'use strict';
function increase(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i <= number_b; i=i+2) {
        result.push(i+1);
    }
    
    return result;
}
function decrease(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i >= number_b; i=i-2) {
        result.push(i);
    }
    
    return result;
}
function even(number_a, number_b) {
    var result = new Array();
    result.push(number_a);
    return result;
}
function odd(number_a, number_b) {
    var result = new Array();
    return result;
}


function get_integer_interval_2(number_a, number_b) {
    if (number_a < number_b) {
        return increase(number_a, number_b);
    }else if (number_a > number_b) {
        return decrease(number_a, number_b);
    }else if (number_a % 2 === 0){
        return even(number_a, number_b);
    }else {
        return odd(number_a, number_b);
    }
}

module.exports = get_integer_interval_2;
