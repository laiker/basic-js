const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  maxTurns = 1;
  for (i = 1; i < disksNumber ; i++) {
    maxTurns = (maxTurns * 2) + 1;
  }
  return { turns: maxTurns, seconds: Math.floor(3600 / turnsSpeed * maxTurns)};
};