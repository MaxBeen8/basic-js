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

  if (domains.length === 0) {
    return {};
  }
  
  for(let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
  }

  for(let i = 0; i < domains.length; i++) {
    for (let j = 0; j < domains[i].length; j++) {
      domains[i][j] = `.${domains[i][j]}`
    }
  }

  for(let i = 0; i < domains.length; i++) {
    for (let j = 1; j < domains[i].length; j++) {
      domains[i][j] = domains[i][j - 1] + domains[i][j];
    }
  }

  domains = domains.join(',').split(',')

  const res = domains.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {} )

  return res
  
}

module.exports = {
  getDNSStats
};
