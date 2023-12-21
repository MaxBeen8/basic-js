const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
    str = str.split('');
    str = str.map(item => {
      return parseInt(item);
    });
    let min = str.indexOf(Math.min(...str));
    if (str[0] === 3) {
      str.splice(0, 1);
      str = +str.join('');
    } else {
      str.splice(min, 1);
      str = +str.join('');
    }
    
  return Number(str)
}
module.exports = {
  deleteDigit
};
