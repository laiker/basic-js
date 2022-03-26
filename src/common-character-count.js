const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  let arSecondString = s2.split('');
  for (i = 0; i < s1.length; i++) {
    if (arSecondString.indexOf(s1[i]) != -1 ) {
      index = arSecondString.indexOf(s1[i]);
      arSecondString.splice(index, 1);
      ++commonChars;
    }
  }
  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};