'use cstrict';


function get_union(collection_a, collection_b) {
    let arr = collection_a.concat(collection_b);
    let noRepeat = [];
    for (let item of arr) {
        if (noRepeat.includes(item)) {
            
        }else {
            noRepeat.push(item);
        }
    }
  
  return noRepeat;
}

module.exports = get_union;

