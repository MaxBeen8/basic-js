const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  } else if (arr.length === 0) {
    return [];
  }
  
  let array = arr.slice(0);
  
  for(let i = 0;  i < array.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        if (i === arr.length - 1) {
          array.pop();
        } else if (array[i + 2].includes('--discard-prev') || array[i + 2].includes('--double-prev')) {
          array.splice(i, 3);
        } else {
          array.splice(i, 2);
        }
        break;
      case '--discard-prev':
        if (array.includes('--discard-prev')) {
          if (array[0].toString().startsWith('--d')) {
            array.shift();
          } else {
            array.splice(i - 1, 2);
          }
          break;
        }
      case '--double-next':
        if (i === arr.length - 1) {
          array.pop();
        } else {
          array.splice(i, 1 , array[i + 1]);
        }
        break;
      case '--double-prev':
        if (array.includes('--double-prev')) {
          if (array[0].toString().startsWith('--d')) {
            array.shift();
          } else {
            array.splice(i, 1, array[i - 1]);
          }
        } 
        
        break;
    }
  }

  return array;
  
}

module.exports = {
  transform
};
