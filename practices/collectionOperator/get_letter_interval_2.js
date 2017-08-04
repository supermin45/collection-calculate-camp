 'use strict';
function increase(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i <= number_b; i++) {
        let n = i + 96;
        
        if (n <= 122) {
            result.push(String.fromCharCode(n));
        }else {
            let n1 = n - 122;
            let n2 = n1 + 96;
            
            if (n2 <= 122){
                result.push('a' + String.fromCharCode(n2));
            }else {
                let a1 = n2 - 122;
                let a2 = a1 + 96;
                result.push('b' + String.fromCharCode(a2));
            }
            
        }
        
    }
    return result;
}
    
   
function decrease(number_a, number_b) {
    var result = new Array();
    
    for (var i = number_a; i >= number_b; i--) {
       let n = i + 96;
        
        if (n <= 122) {
            result.push(String.fromCharCode(n));
        }else {
            let n1 = n - 122;
            let n2 = n1 + 96;
            
            if (n2 <= 122){
                result.push('a' + String.fromCharCode(n2));
            }else {
                let a1 = n2 - 122;
                let a2 = a1 + 96;
                result.push('b' + String.fromCharCode(a2));
            }
            
        }
    }
    
    return result;
}

function self(number_a, number_b) {
    var result = new Array();
    
    result.push('ab');
    
    return result;
}

function get_letter_interval_2(number_a, number_b) {
    if (number_a < number_b) {
        return increase(number_a, number_b);
    }else if (number_a > number_b) {
        return decrease(number_a, number_b);
    }else {
        return self(number_a, number_b);
    }
}
module.exports = get_letter_interval_2;

