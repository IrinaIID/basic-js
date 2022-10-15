const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof date === 'undefined') { return 'Unable to determine the time of year!'}
  if (isNaN(Date.parse(date))) { throw new Error('Invalid date!') }


  let monthNum = date.getMonth();
  let result = (monthNum === 11 || monthNum <= 1) ? 'winter' : (monthNum <= 4) ? 'spring' : (monthNum <= 7) ? 'summer' : 'autumn';
  return result;


}

module.exports = {
  getSeason
};
