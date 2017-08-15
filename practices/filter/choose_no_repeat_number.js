'use strict';

function choose_no_repeat_number(collection) {
     let noRepeat = [];
     for (let item of collection) {
    	if (noRepeat.includes(item)){

     	}else {
     		noRepeat.push(item);
     	}
     }
     return noRepeat;
}

module.exports = choose_no_repeat_number;
