'use strict';

function calculate_elements_sum(collection, element) {
  let result;
  
  for (let i in collection) {
      if (collection[i] === element) {
          result = parseInt(i);
          break;
      }
  }
  
  return result;
}

module.exports = calculate_elements_sum;

