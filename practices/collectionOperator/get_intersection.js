'use strict';

function get_intersection(collection_a, collection_b) {
  let result = new Array();
  
  for (let i = 0; i < collection_b.length; i++) {
      if (collection_a.toString().indexOf(collection_b[i].toString()) > -1){
           result.push(collection_b[i]);
      }

  }
  
  
  return result;
}

module.exports = get_intersection;
