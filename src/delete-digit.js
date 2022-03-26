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
 * 
 */
function deleteDigit(n) {
  let arDigits = n.toString().split('');
  let arMaxDigits = [];
  for (let i = 0; i < arDigits.length; i++) {
    let maxValue = '';
    for (let j = 0; j < arDigits.length; j++) {
      if (j != i) {
        maxValue += arDigits[j];
      }
    }
    arMaxDigits.push(parseInt(maxValue));
  }

  return Math.max(...arMaxDigits);
}

module.exports = {
  deleteDigit
};
