const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arStr = str.split('');
  let arFinal = [];
  let stage = 0;
  for (i = 0; i < str.length; i++) {
        
    if (str[i] != str[i - 1] && i != 0) {
      stage++;
    } 

    if (arFinal[stage] == undefined) {
      arFinal[stage] = [];
    }


    arFinal[stage].push(str[i]);
  
  }

  finalStr = '';
  for (let i = 0; i < arFinal.length; i++) {
    if (arFinal[i].length == 1) {
      finalStr += arFinal[i][0];
    } else {
      finalStr += arFinal[i].length + arFinal[i][0];
    }
  }

  return finalStr;
}

module.exports = {
  encodeLine
};
