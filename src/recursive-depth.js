const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) && arr.length 
    ? 1 + Math.max(...arr.map((item) => this.calculateDepth(item)))
    : Array.isArray(arr) && !arr.length
    ? +1
    : 0;
  }
}

module.exports = {
  DepthCalculator
};
