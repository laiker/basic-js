const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arData = [];
  let obDomains = {};
  for (i = 0; i < domains.length; i++) {
    arData = domains[i].split('.').reverse();
    key = '';
    for (let j = 0; j < arData.length; j++) {
      key += '.' + arData[j];
      if (obDomains.hasOwnProperty(key)) {
        obDomains[key] += 1;
      } else {
        obDomains[key] = 1;
      }
    }

  }

  return obDomains;
}

module.exports = {
  getDNSStats
};
