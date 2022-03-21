const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strParts = [];
  let mainStrs = []; 
  let strAddition = '';

  if (options.addition === null) {
    options.addition = 'null';
  }

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if(!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes > 1) {
    for (i = 0; i < options.additionRepeatTimes; i++) {
      strParts.push(options.addition);
    }
  }

  if (strParts.length) {
    strAddition = strParts.join(options.additionSeparator);
  } else {
    strAddition = options.addition ? options.addition : '';
  }

  for (i = 0; i < options.repeatTimes; i++) {
    mainStrs.push(str + strAddition);
  }

  return mainStrs.join(options.separator);
};
  