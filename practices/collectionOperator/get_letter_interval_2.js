 'use strict';

function increase(number_a, number_b) {
    let result = [];
    for (let i =number_a; i <= number_b; i++) {
        if (i <= 26) {
            result.push(String.fromCharCode(i + 96));
        }else {
            let a = Math.floor(i / 26);
            let b = i % 26;
            if (a > 1 && b === 0) {
                result.push(String.fromCharCode(a  - 1 + 96) + String.fromCharCode(26 + 96));
            }else {
                result.push(String.fromCharCode(a + 96) + String.fromCharCode(b + 96));
            }
            
        }
    }
    return result;
}

function decrease(number_a, number_b) {
    let result = [];
    for (let i =number_a; i >= number_b; i--) {
        if (i <= 26) {
            result.push(String.fromCharCode(i + 96));
        }else {
            let a = Math.floor(i / 26);
            let b = i % 26;
            if (a > 1 && b === 0) {
                result.push(String.fromCharCode(a  - 1 + 96) + String.fromCharCode(26 + 96));
            }else {
                result.push(String.fromCharCode(a + 96) + String.fromCharCode(b + 96));
            }
            
            
        }
    }
    return result;
}

function get_letter_interval_2(number_a, number_b) {
    return (number_a <= number_b) ? increase(number_a, number_b) : decrease(number_a, number_b);
    
}
module.exports = get_letter_interval_2;

