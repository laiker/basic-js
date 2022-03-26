const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let oneKeys = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      oneKeys.push(i);
    }
  }

  let sortedArr = arr.filter((val) => val != -1).sort((a, b) => a - b);

  for (i = 0; i < oneKeys.length; i++) {
    sortedArr.splice(oneKeys[i], 0, -1);
  }

  return sortedArr;

}

module.exports = {
  sortByHeight
};
