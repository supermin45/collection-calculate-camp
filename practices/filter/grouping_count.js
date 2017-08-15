'use strict';


function grouping_count(collection) {
  let obj = {};
  
  collection.forEach(a => {
      let count = collection.filter(b => a === b).length;
      obj[`${a}`] = count;
  });
  return obj;
}

module.exports = grouping_count;
