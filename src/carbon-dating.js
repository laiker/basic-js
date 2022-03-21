const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  activity = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string')
    return false;

  years = Math.ceil(Math.log(activity / MODERN_ACTIVITY) * -1 / (0.693 / HALF_LIFE_PERIOD));

  if (years < 0 || years > HALF_LIFE_PERIOD * 10 || isNaN(years)) {
    return false;
  }

  return years;
};
