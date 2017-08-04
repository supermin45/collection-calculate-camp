'use cstrict';


function get_union(collection_a, collection_b) {
  let result = new Array();
  let middle = new Array();
  
  middle  = collection_a.concat(collection_b);
  for (let i in middle) {
      if (result.indexOf(middle[i]) === -1) {
          result.push(middle[i]);
      }
  }
  return result;
}

module.exports = get_union;

